import Image from 'next/image'
import { Inter } from 'next/font/google'
import AudioRecorder from "@/components/AudioRecorder/AudioRecorder"
import MySpeechRecognition from "@/components/MySpeechRecognition/MySpeechRecognition"
import Navbar from "@/components/Navbar/Navbar"
import HeroSection from "@/components/HeroSection/HeroSection"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <HeroSection />
      {/* <MySpeechRecognition /> */}
    </div>
  )
}
