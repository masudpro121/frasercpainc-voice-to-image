import '@/styles/globals.css'
import { createContext, useState } from "react"
export const MyContext = createContext()
export default function App({ Component, pageProps }) {
  const [prompt, setPrompt] = useState('')
  const [generatedImage, setGeneratedImage] = useState({})
  const value = {
    prompt, setPrompt,
    generatedImage, setGeneratedImage
  }
  return <MyContext.Provider value={value}>
    <Component {...pageProps} />
  </MyContext.Provider>
}
