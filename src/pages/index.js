import Image from 'next/image'
import { Inter } from 'next/font/google'
import AudioRecorder from "@/components/AudioRecorder/AudioRecorder"
import MySpeechRecognition from "@/components/MySpeechRecognition/MySpeechRecognition"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <MySpeechRecognition />
    </div>
  )
}
