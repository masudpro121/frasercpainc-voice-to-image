import React, { useEffect, useState } from "react";
import { MdKeyboardVoice } from 'react-icons/md';
import { FaStop } from 'react-icons/fa';
function MySpeechRecognition() {
  const  [text, setText] = useState('')
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

    setText(texts.join(". "))
  }
},[])
 const startListening = () => {
  setText('')
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
        <textarea className=" outline-none  rounded-md p-2 w-80 h-52" placeholder="Prompt.." value={text} onChange={e=>setText(e.target.value)} />
      </div>
    </div>
  );
}

export default MySpeechRecognition;
