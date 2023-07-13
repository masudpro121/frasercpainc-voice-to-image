import Link from "next/link"
import React from 'react'

function Navbar() {
  return (
    <div className=" mx-5 sm:mx-20  py-2 text-white flex items-center gap-5 justify-center">
      <div className="w-[47%]">
        <h3 className="text-xl sm:text-2xl font-bold italic">Kreact.ai</h3>
      </div>
      <div className="flex sm:w-[47%] text-sm sm:text-base gap-3 sm:gap-20">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/gallery">
          <p>Gallery</p>
        </Link>
        <Link href="/explore">
          <p>Explore</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar