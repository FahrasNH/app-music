import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MusicCard from '../../components/molecules/MusicCard'
import useMusic from '../../hooks/useMusics'

const ListMusic = () => {
  const { getAllMusic, managementMusicState } = useMusic()
  const params = useParams()

  useEffect(() => {
    getAllMusic(params)
  }, [getAllMusic, params])

  return (
    <div className="listMusicApp">
      <p className="text-center text-sm text-[#334155]">
        Search result for :{' '}
        <span className="text-[#7b34dd] text-lg font-bold capitalize">
          {(params?.term || '').split('+').join(' ')}
        </span>
      </p>
      {(managementMusicState?.dataMusic || []).map((item, idx) => (
        <div key={idx} className="p-4">
          <MusicCard data={item} />
        </div>
      ))}
    </div>
  )
}

export default ListMusic
