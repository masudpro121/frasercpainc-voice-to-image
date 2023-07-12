import React, { useContext, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MySpeechRecognition from "../MySpeechRecognition/MySpeechRecognition";
import { MyContext } from "@/pages/_app";

function Generate() {
  const [inprogress, setInprogress] = useState(false)
  const [negativePrompt, setNegativePrompt] = useState('')
  const [model, setModel] = useState('')
  const [generatedImage, setGeneratedImage] = useState({})
  const {prompt, setPrompt} = useContext(MyContext)

  const generateImage = () =>{
    setInprogress(true)
    setPrompt('')
    setNegativePrompt('')
    const data = {
      sample: 1, prompt, 
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
      console.log(result.output[0]);
      const {id, meta, output} = result
      if(output){
        setGeneratedImage({id, meta, output})
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
    <>
    <MySpeechRecognition />
    <div >
      <button className="text-white" onClick={generateImage}>Generate</button>
    </div>
    <ToastContainer position="bottom-right" />
    </>
  );
}

export default Generate;
