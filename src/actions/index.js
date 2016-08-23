import axios from 'axios'

export const FETCH_PROJECT = 'FETCH_PROJECT'
export const SHOW_PROJECT = 'SHOW_PROJECT'

export function fetchProject () {
  const request = axios.get('https://redswift.herokuapp.com/api/project')

  return {
    type: FETCH_PROJECT,
    payload: request
  }
}

export function showProject (id) {
  const request = axios.get(`https://redswift.herokuapp.com/api/project/${id}`)

  return {
    type: SHOW_PROJECT,
    payload: request
  }
}
