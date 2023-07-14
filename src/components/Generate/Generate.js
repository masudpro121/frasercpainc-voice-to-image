import React, { useContext, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MySpeechRecognition from "../MySpeechRecognition/MySpeechRecognition";
import { MyContext } from "@/pages/_app";
import withAuth from "@/HOCS/withAuth";
import { getLimit, setLimit } from "@/utils/limit";
function Generate() {
  const [negativePrompt, setNegativePrompt] = useState('')
  const [model, setModel] = useState('')
  
  const {prompt, setPrompt,  setGeneratedImage, inprogress, setInprogress}  = useContext(MyContext)
  
  const generateImage = () =>{
    setInprogress(true)
    setPrompt('')
    setNegativePrompt('')
    const data = {
      sample: 4, prompt, 
      negativePrompt:"",
      model: "midjourney"
      // dimension: {
      //   width: 520,
      //   height: 520
      // },
    }
    fetch('/api/generate-image', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      }, 
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result=>{
      const {id, meta, output} = result
      if(output){
        setGeneratedImage({id, meta, output})
        
        if(getLimit()){
          setLimit(Number(getLimit())+1)
        }else{
          setLimit(1)
        }
      }else{
        toast('Something wrong! Try again.')
      }
      setInprogress(false)
    })
    .catch(err=>{
      setInprogress(false)
      console.log(err);
    })
  }
  return (
    <div className="  md:max-w-[1000px] m-auto ">
    <MySpeechRecognition />
    <div className="mx-10 mt-3">
      <button className="text-white bg-purple-500 px-3 py-1 rounded-3xl" onClick={generateImage}>Generate</button>
    </div>
    <ToastContainer position="bottom-right" autoClose={1000} />
    </div>
  );
}

export default withAuth(Generate);
