import { MyContext } from "@/pages/_app";
import Image from "next/image";
import React, { useContext } from "react";
import useDownloader from "react-use-downloader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {IoMdCloudDownload} from 'react-icons/io'
import {BiSolidCopy} from 'react-icons/bi'
import LoadingGif from "@/assets/loading.gif"
function ShowImages() {
  const { generatedImage, inprogress } = useContext(MyContext);
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =  useDownloader();

   
  const handleCopy = (sImage) =>{
    navigator.clipboard.writeText(sImage)
    toast('Copied')
  }
  const handleDownload = (sImage) => {
    download(sImage, "image.png")
    toast("Downloading..")

  }
  return (
   <>
    <div className="text-white w-full  flex mt-10  flex-wrap gap-5 justify-center">
      {generatedImage.output && !inprogress &&
        generatedImage.output.map((img, id) => {
          return (
            <div key={id} className="relative group ">
              <Image className="w-[200px] lg:w-[250px] xl:w-[300px]" src={img} height={300} width={300} />
              <div className=" bg-slate-400 rounded-sm px-2 py-1 invisible group-hover:visible  flex gap-3 absolute bottom-1 right-1">
                <button onClick={() => handleCopy(img)}>
                  <BiSolidCopy className="text-xl cursor-pointer hover:text-slate-100" />
                </button>
                <button onClick={() => handleDownload(img)}>
                  <IoMdCloudDownload className="text-xl cursor-pointer hover:text-slate-100" />
                </button>
              </div>
            </div>
          );
        })}
        {
            inprogress &&
            <div>
              <Image src={LoadingGif} height="200" width="200" />
            </div>
          }
    </div>
   </>
  );
}

export default ShowImages;
