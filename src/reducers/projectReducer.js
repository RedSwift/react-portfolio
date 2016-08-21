import { FETCH_PROJECT, SHOW_PROJECT } from '../actions/index'

const INITIAL_STATE = { all: [], show: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECT:
      return { ...state, all: action.payload.data.reverse() }
    case SHOW_PROJECT:
      return { ...state, show: action.payload.data }
    default:
      return state
  }
}
