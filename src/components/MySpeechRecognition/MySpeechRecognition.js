import React, { useEffect, useState } from "react";

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
      <button onClick={startListening}>Start Record</button>
      <button onClick={stopListening}>Stop Record</button>
      <div>
        {text}
      </div>
    </div>
  );
}

export default MySpeechRecognition;
