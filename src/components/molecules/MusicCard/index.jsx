import React from 'react'
import ICONS from '../../../constants/icons'

const MusicCard = ({ data }) => {
  return (
    <div className="p-3 shadow-md rounded-lg bg-white flex">
      <div className="relative">
        <img
          className="absolute bottom-0 top-0 right-0 left-0 m-auto"
          src={ICONS.icCirclePlay}
          alt="icPlay"
        />
        <img
          className="m-auto rounded-lg w-[100px] h-[100px] object-cover"
          src={data?.artworkUrl100}
          alt="artwork"
        />
      </div>
      <div className="w-[70%] ml-3">
        <div className="flex flex-col justify-between h-full">
          <div>
            <p className="text-[10px] text-[#334155]">{data?.artistName}</p>
            <p className="text-sm text-[#334155] font-bold">
              {data?.trackName}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="bg-[#10b981] rounded-full px-3 py-1 w-fit">
              <p className="text-white text-[10px] p-0 font-semibold">
                {data?.primaryGenreName}
              </p>
            </div>
            <div className="flex items-center">
              <img src={ICONS.icDollar} alt="ic" className="mr-1" />
              <p className="text-[#f5b014] text-xs font-bold">
                {data?.trackPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicCard
