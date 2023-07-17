import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import Head from "next/head";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from "react";
export const MyContext = createContext();
export default function App({ Component, pageProps }) {
  const [prompt, setPrompt] = useState("");
  const [generatedImage, setGeneratedImage] = useState({});
  const [inprogress, setInprogress] = useState(false);
  const [user, setUser] = useState({});
  const value = {
    prompt,
    setPrompt,
    generatedImage,
    setGeneratedImage,
    inprogress,
    setInprogress,
    user,
    setUser,
  };
  return (
    <MyContext.Provider value={value}>
      <div className="bg-black min-h-screen">
        <Head>
          <title>Kreart.AI</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer position="bottom-right" autoClose={1000} />
      </div>
    </MyContext.Provider>
  );
}
