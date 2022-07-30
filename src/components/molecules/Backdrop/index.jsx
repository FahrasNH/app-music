import React from 'react'
import ICONS from '../../../constants/icons'

const Backdrop = ({ onClick }) => {
  return (
    <div className="absolute h-screen w-[35%] allMobile:w-full sm:w-full md:w-full top-0 z-10 bg-[rgba(28,28,45,.9)] p-8">
      <img
        src={ICONS.icClose}
        alt="icClose"
        className="float-right cursor-pointer"
        onClick={onClick}
      />
      <div className="relative w-full top-1/3">
        <p className="text-white font-bold text-[20px] text-center mb-8">
          Search
        </p>
        <div className="w-full">
          <button className="w-full bg-white rounded-full p-3 mb-4">
            <span className="text-[#64748b] text-center">
              Artist / Album / Title
            </span>
          </button>
          <button className="w-full bg-gradient-to-r from-[#712bda] to-[#a45deb] rounded-full p-3">
            <span className="text-white text-center">Search</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Backdrop
