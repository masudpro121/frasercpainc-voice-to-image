import React, { useContext, useEffect, useState } from "react";
import { MdKeyboardVoice } from 'react-icons/md';
import { FaStop } from 'react-icons/fa';
import { MyContext } from "@/pages/_app";
function MySpeechRecognition() {
  const  {prompt, setPrompt} = useContext(MyContext)
  const [isListening, setIsListening] = useState(false)
 let recognition = null
 if('webkitSpeechRecognition' in global){
  recognition = new  webkitSpeechRecognition()
  recognition.continuous = true
  recognition.lang = 'en-US'
 }
useEffect(()=>{
  recognition.onresult = (event) => {
    let texts = []
    for(let i=0; i<event.results.length; i++){
      texts.push(event.results[i][0].transcript)
    }

    setPrompt(texts.join(". "))
  }
},[])
 const startListening = () => {
  setPrompt('')
  setIsListening(true)
  recognition.start()
 }
 const stopListening = () => {
  recognition.stop()
  setIsListening(false)
 }
  return (
    <div>
      <div className=" w-10 h-10  flex items-center justify-center">
        {
          !isListening ? <MdKeyboardVoice onClick={startListening} className="cursor-pointer text-3xl text-white" />
          : <FaStop onClick={stopListening} className="cursor-pointer text-xl text-red-400"/>

        }
      </div>
      <div>
        <textarea className=" outline-none  rounded-md p-2 w-80 h-52" placeholder="Prompt.." value={prompt} onChange={e=>setPrompt(e.target.value)} />
      </div>
    </div>
  );
}

export default MySpeechRecognition;
