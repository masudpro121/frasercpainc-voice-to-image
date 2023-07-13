import Image from "next/image"
import React from 'react'
import SpeakingImg from "@/assets/speaking.png"
import TapImg from "@/assets/tap.png"
import SampleImg from "@/assets/sample1.png"
import DownloadImg from "@/assets/download.png"
import ShareImg from "@/assets/share.png"
function Gallery() {
  return (
    <div id="gallery" className="text-white pt-28 min-h-screen ">
      <h1 className=" text-6xl font-bold text-center">How to Generate your Images</h1>
      <div className="flex gap-10 justify-center mt-20">
        <div className=" w-[300px] h-[300px]">
          <Image className="w-full h-full"  src={SpeakingImg}  />
          <h3 className="text-2xl text-center mt-5 font-light">RECORD YOUR VOICE</h3>
        </div>
        <div className=" w-[300px] h-[300px]">
          <Image className="w-full h-full" src={TapImg}  />
          <h3 className="text-2xl text-center mt-5 font-light break-words">CHOOSE THE IMAGE THAT FITS YOUR VISION</h3>
        </div>
        <div className=" w-[300px] h-[300px]">
          <Image className=" w-full h-[270px]" src={SampleImg}  />
          <div className="flex h-[30px] mt-2 justify-between">
            <Image className="w-8" src={DownloadImg}  />
            <Image className="w-8" src={ShareImg}  />
          </div>
          <h3 className="text-2xl text-center mt-5 font-light">SHARE YOUR DESIGN</h3>
        </div>
      </div>
    </div>
  )
}

export default Gallery