import { MyContext } from "@/pages/_app";
import MyImage from "next/image";
import React, { useContext } from "react";
import useDownloader from "react-use-downloader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdCloudDownload } from "react-icons/io";
import { BiSolidCopy } from "react-icons/bi";
import LoadingGif from "@/assets/loading.gif";
import watermarkImage from "@/utils/watermarkImage";
function ShowImages() {
  const { generatedImage, inprogress } = useContext(MyContext);
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const handleCopy = (sImage) => {
    navigator.clipboard.writeText(sImage);
    toast("Copied");
  };
  const handleDownload = (sImage) => {
    download(sImage, "image.png");
    toast("Downloading..");
  };
  const downloadCanvas = function (dataurl) {
    var link = document.createElement("a");
    link.download = "filename.png";
    // link.href = document.getElementById('canvas').toDataURL()
    link.href = dataurl;
    link.click();
  };
  const generateWatermark = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const originalImage = new Image();
    originalImage.crossOrigin = "anonymous";
    originalImage.src = "https://i.ibb.co/cc1XWBB/13.png";
    originalImage.onload = async function () {
      await context.drawImage(originalImage, 0, 0);
      const canvasWidth = originalImage.width || 1100;
      const canvasHeight = originalImage.height || 1100;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      // initializing the canvas with the original image
      context.drawImage(originalImage, 0, 0, canvasWidth, canvasHeight);

      // adding a blue watermark text in the bottom right corner
      
      context.fillStyle = "white";
      context.textBaseline = "middle";
      context.font = "bold 25px serif";
      context.fillText(
        "Kreart.Ai",
        canvasWidth - 150,
        canvasHeight - 20
      );
      downloadCanvas(canvas.toDataURL());
    };

    
  };
  return (
    <>
      <div className="text-white w-full  flex mt-10  flex-wrap gap-5 justify-center">
        <canvas id="canvas" />
        <button onClick={generateWatermark}>watermark</button>
        {generatedImage.output &&
          !inprogress &&
          generatedImage.output.map((img, id) => {
            return (
              <div key={id} className="relative group ">
                <MyImage
                  className="w-[200px] lg:w-[250px] xl:w-[300px]"
                  src={img}
                  height={300}
                  width={300}
                />
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
        {inprogress && (
          <div>
            <MyImage src={LoadingGif} height="200" width="200" />
          </div>
        )}
      </div>
    </>
  );
}

export default ShowImages;
