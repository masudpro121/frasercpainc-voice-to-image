import Image from "next/image"
import React from 'react'
import VoiceImg from "@/assets/red-voice.png"
function Beta() {
  return (
    <div className="text-white px-10 text-center min-h-screen flex justify-center items-center">
      <div>
      <h1 className="text-3xl sm:text-6xl font-bold ">Try our Beta Version</h1>
      <p className="text-2xl mt-7 font-light">See how AI can turn your voice into art.</p>
      <div className="flex justify-center mt-10">
        <Image className="w-[300px]" src={VoiceImg} />
      </div>
      </div>
    </div>
  )
}

export default Beta