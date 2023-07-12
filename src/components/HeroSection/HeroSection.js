import Image from "next/image"
import React from 'react'
import Sample1Img from "@/assets/sample1.png"
function HeroSection() {
  return (
    <div className="text-white flex justify-center items-center gap-10">
     <div className="w-[45%] p-10">
      <h1 className="  text-6xl font-semibold leading-tight">
          Say <br/>
          Something<br/>
          Creative<br/>
          Everyday
        </h1>
        <p className="mt-5 text-xl font-light">
          Convert voice into an image in mere sounds with the Kreart.ai Image generator. Say a detailed description and watch your words transform into a vibrant piece of art
        </p>
        <div className="mt-7">
          <button className=" bg-purple-500 px-7  py-2 rounded-3xl font-semibold">Start the Journey</button>
        </div>
     </div>
     <div className="w-[45%] px-5 mt-14">
      <p className="text-2xl mb-5 italic ">Black king standing under rainbow</p>
      <Image className="w-[80%]" src={Sample1Img} height={500} width={500} />
     </div>
    </div>
  )
}

export default HeroSection