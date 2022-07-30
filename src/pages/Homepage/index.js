/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ICONS from '../../constants/icons'

const Homepage = () => {
  const navigate = useNavigate()

  return (
    <div className="homepageApp h-screen">
      <img
        src={ICONS.icLogo}
        alt="ic"
        className="m-auto absolute top-0 right-0 bottom-[25%] left-0"
      />
      <div className="bottom-0 absolute p-8 w-full">
        <button
          onClick={() => navigate('/list-music')}
          className="w-full bg-white rounded-full p-3 mb-4"
        >
          <span className="text-[#64748b] text-center">
            Artist / Album / Title
          </span>
        </button>
        <button className="w-full bg-[rgb(255,255,255,.2)] rounded-full p-3">
          <span className="text-white text-center">Search</span>
        </button>
      </div>
    </div>
  )
}

export default Homepage
