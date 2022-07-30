import { apiConfig } from '../constants/config'
import {
  MUSIC_REQUEST,
  MUSIC_SUCCESS,
  MUSIC_FAILURE,
} from '../constants/actionTypes'

// ----- MUSIC ----- //
export const musicSuccess = (data) => ({
  type: MUSIC_SUCCESS,
  data,
})

export const musicFailure = (errorMessage, errorObject) => ({
  type: MUSIC_FAILURE,
  errorMessage,
  errorObject,
})

export const musicPending = (data) => ({
  type: MUSIC_REQUEST,
  data,
})

export const getAllMusicAction = (dispatch, callback) => {
  return async () => {
    dispatch(musicPending())
    try {
      const result = await fetch(`${apiConfig.apiUrl}/search?term=jack+johnson`)
      const response = await result.json()

      if (result.ok) {
        dispatch(musicSuccess(response?.results))
        callback?.(response)
      }
    } catch (e) {
      dispatch(musicFailure(e?.response?.statusText, e?.response))
    }
  }
}

// ----- END OF MUSIC ----- //
