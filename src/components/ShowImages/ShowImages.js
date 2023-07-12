import { MyContext } from "@/pages/_app";
import Image from "next/image";
import React, { useContext } from "react";
import useDownloader from "react-use-downloader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ShowImages() {
  const { generatedImage } = useContext(MyContext);
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =  useDownloader();
  console.log(percentage, 'percen');
  console.log(isInProgress, 'inprogress');
   
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
    <div className="text-white w-full flex flex-wrap gap-5 justify-center">
      {generatedImage.output &&
        generatedImage.output.map((img, id) => {
          return (
            <div key={id} className="relative group">
              <Image src={img} height={300} width={300} />
              <div className="invisible group-hover:visible  flex gap-2 absolute bottom-0 right-1">
                <button onClick={() => handleCopy(img)}>Copy</button>
                <button onClick={() => handleDownload(img)}>
                  download
                </button>
              </div>
            </div>
          );
        })}
    </div>
   </>
  );
}

export default ShowImages;
