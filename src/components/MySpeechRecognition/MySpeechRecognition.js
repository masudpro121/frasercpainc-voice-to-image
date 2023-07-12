import React, { useContext, useEffect, useState } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { FaStop } from "react-icons/fa";
import { MyContext } from "@/pages/_app";
function MySpeechRecognition() {
  const { prompt, setPrompt } = useContext(MyContext);
  const [isListening, setIsListening] = useState(false);
  let recognition = null;
  if ("webkitSpeechRecognition" in global) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "en-US";
  }
  useEffect(() => {
    recognition.onresult = (event) => {
      let texts = [];
      for (let i = 0; i < event.results.length; i++) {
        texts.push(event.results[i][0].transcript);
      }

      setPrompt(texts.join(". "));
    };
  }, []);
  const startListening = () => {
    setPrompt("");
    setIsListening(true);
    recognition.start();
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
          <MdKeyboardVoice
            title="Start Listening"
            onClick={startListening}
            className={`hover:text-purple-200 cursor-pointer text-3xl text-white ${
              isListening && "text-purple-400"
            }`}
          />
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
