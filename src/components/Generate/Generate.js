import React, { useContext, useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MySpeechRecognition from "../MySpeechRecognition/MySpeechRecognition";
import { MyContext } from "@/pages/_app";
import withAuth from "@/HOCS/withAuth";
import { getLimit, setLimit } from "@/utils/limit";
function Generate() {
  
  
  const {prompt, setPrompt,  setGeneratedImage, inprogress, setInprogress}  = useContext(MyContext)
 
  return (
    <div className="  md:max-w-[1000px] m-auto ">
    <MySpeechRecognition />
    <ToastContainer position="bottom-right" autoClose={1000} />
    </div>
  );
}

export default withAuth(Generate);
