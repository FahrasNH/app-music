import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMusicAction } from '../actions/musicActions'

const useMusic = () => {
  const dispatch = useDispatch()
  const managementMusicState = useSelector((state) => state.music)

  const handleGetAllMusic = useCallback(
    (params, callback) => {
      dispatch(getAllMusicAction(params, dispatch, callback))
    },
    [dispatch],
  )

  return {
    managementMusicState,
    getAllMusic: handleGetAllMusic,
  }
}

export default useMusic
