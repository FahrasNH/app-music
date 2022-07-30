/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ICONS from '../../constants/icons'

const Homepage = () => {
  const [search, setSearch] = useState()
  const navigate = useNavigate()

  const handleSearch = () => {
    const findTerm = search.split(' ').join('+')

    navigate(`/list-music/${findTerm}`)
  }

  return (
    <div className="homepageApp h-screen">
      <img
        src={ICONS.icLogo}
        alt="ic"
        className="m-auto absolute top-0 right-0 bottom-[25%] left-0"
      />
      <div className="bottom-0 absolute p-8 w-full">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Artist / Album / Title"
          className="w-full bg-white rounded-full p-3 mb-4 text-center"
        />
        <button
          className="w-full bg-[rgb(255,255,255,.2)] rounded-full p-3"
          onClick={() => handleSearch()}
        >
          <span className="text-white text-center">Search</span>
        </button>
      </div>
    </div>
  )
}

export default Homepage
