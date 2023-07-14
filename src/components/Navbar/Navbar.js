import Link from "next/link"
import React from 'react'

function Navbar() {
  return (
    <div className=" sticky top-0 bg-slate-950 px-5 sm:px-20  py-2 text-white flex items-center gap-5 justify-center">
      <div className="w-[47%]">
        <h3 className="text-xl sm:text-2xl font-bold italic">Kreact.ai</h3>
      </div>
      <div className="flex sm:w-[47%] text-sm sm:text-base gap-3 sm:gap-20">
        <Link href="/">
          <p>Home</p>
        </Link>
        <Link href="/">
          <p>Gallery</p>
        </Link>
        <Link href="/">
          <p>Explore</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar