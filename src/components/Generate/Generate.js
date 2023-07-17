import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MySpeechRecognition from "../MySpeechRecognition/MySpeechRecognition";
import { MyContext } from "@/pages/_app";
import withAuth from "@/HOCS/withAuth";
import { getLimit, setLimit } from "@/utils/limit";
function Generate() {
  return (
    <div className="  md:max-w-[1000px] m-auto ">
    <MySpeechRecognition />
    </div>
  );
}

export default withAuth(Generate);
