import {
  MUSIC_REQUEST,
  MUSIC_SUCCESS,
  MUSIC_FAILURE,
} from '../constants/actionTypes'

const initialState = {
  isFetching: false,
  dataMusic: [],
}

export default function genre(state = initialState, action) {
  switch (action.type) {
    case MUSIC_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case MUSIC_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataMusic: action?.data,
      }
    case MUSIC_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action?.errorMessage,
        errorObject: action?.errorObject,
      }
    default:
      return state
  }
}
