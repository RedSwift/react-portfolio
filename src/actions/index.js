import axios from 'axios'

export const FETCH_PROJECT = 'FETCH_PROJECT'

export function fetchProject () {
  const request = axios.get('http://redswift.herokuapp.com/api/project')

  return {
    type: FETCH_PROJECT,
    payload: request
  }
}
