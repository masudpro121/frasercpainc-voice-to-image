import Navbar from "@/components/Navbar/Navbar"
import '@/styles/globals.css'
import { createContext, useState } from "react"
export const MyContext = createContext()
export default function App({ Component, pageProps }) {
  const [prompt, setPrompt] = useState('')
  const [generatedImage, setGeneratedImage] = useState({})
  const [inprogress, setInprogress] = useState(false)
  const value = {
    prompt, setPrompt,
    generatedImage, setGeneratedImage,
    inprogress, setInprogress
  }
  return <MyContext.Provider value={value}>
    <div className="bg-black min-h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  </MyContext.Provider>
}
