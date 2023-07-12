import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar"
import HeroSection from "@/components/HeroSection/HeroSection"
import Generate from "@/components/Generate/Generate"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <HeroSection />
      <Generate />
    </div>
  )
}
