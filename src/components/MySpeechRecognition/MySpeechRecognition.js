import React, { useContext, useEffect, useState } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { FaStop } from "react-icons/fa";
import { MyContext } from "@/pages/_app";
function MySpeechRecognition() {
  const { prompt, setPrompt } = useContext(MyContext);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null)
  const RecognitionResult = (event) => {
    let texts = [];
    for (let i = 0; i < event.results.length; i++) {
      texts.push(event.results[i][0].transcript);
    }
    setPrompt(texts.join(". "));
  };
  useEffect(()=>{
    if("webkitSpeechRecognition" in global){
      let rec = new webkitSpeechRecognition()
      rec.continuous = true;
      rec.lang = "en-US";
      rec.onresult = RecognitionResult
      setRecognition(rec)
    }
  },[])
  

  const startListening = () => {
    setPrompt("");
    recognition.start();
    console.log(recognition);
    setIsListening(true);
  };
  const stopListening = () => {
    recognition.stop();
    setIsListening(false);
  };
  return (
    <div className="px-10 text-white ">
      <div className="flex items-center justify-between">
        <h3 className="text-md mb-5  mt-2">
          {isListening ? "Listening..." : "Say Something.."}
        </h3>
        <div className=" flex  items-center  gap-7">
          <button disabled={isListening}  onClick={startListening}>
            <MdKeyboardVoice
              type="button"
              title="Start Listening"
              className="hover:text-purple-200 cursor-pointer text-3xl text-white "
            />
          </button>
          <FaStop
            title="Stop Listening"
            onClick={stopListening}
            className="cursor-pointer text-xl hover:text-red-500 text-red-400"
          />
        </div>
      </div>
      <div>
        <textarea
          className="text-black outline-none  rounded-md p-2 w-full h-52"
          placeholder="Prompt.."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
    </div>
  );
}

export default MySpeechRecognition;
