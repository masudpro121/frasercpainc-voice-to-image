import React from 'react'

function Navbar() {
  return (
    <div className="mx-20  py-2 text-white flex items-center gap-5 justify-center">
      <div className="w-[47%]">
        <h3 className="text-2xl font-bold italic">Kreact.ai</h3>
      </div>
      <div className="flex w-[47%] gap-20">
        <p>Home</p>
        <p>Gallery</p>
        <p>Explore</p>
      </div>
    </div>
  )
}

export default Navbar