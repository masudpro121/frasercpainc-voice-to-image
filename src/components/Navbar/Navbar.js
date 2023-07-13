import React from 'react'

function Navbar() {
  return (
    <div className=" mx-5 sm:mx-20  py-2 text-white flex items-center gap-5 justify-center">
      <div className="w-[47%]">
        <h3 className="text-xl sm:text-2xl font-bold italic">Kreact.ai</h3>
      </div>
      <div className="flex sm:w-[47%] text-sm sm:text-base gap-3 sm:gap-20">
        <p>Home</p>
        <p>Gallery</p>
        <p>Explore</p>
      </div>
    </div>
  )
}

export default Navbar