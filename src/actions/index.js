import axios from 'axios'

export const FETCH_PROJECT = 'FETCH_PROJECT'
export const SHOW_PROJECT = 'SHOW_PROJECT'
export const POST_FORM = 'POST_FORM'

export function fetchProject () {
  const request = axios.get('http://redswift.herokuapp.com/api/project')

  return {
    type: FETCH_PROJECT,
    payload: request
  }
}

export function showProject (id) {
  const request = axios.get(`http://redswift.herokuapp.com/api/project/${id}`)

  return {
    type: SHOW_PROJECT,
    payload: request
  }
}

export function postForm (inputName, inputEmail, inputContent) {
  const post = axios({
    method: 'post',
    url: 'http://redswift.herokuapp.com/api/contact',
    data: {
      name: inputName,
      email: inputEmail,
      content: inputContent
    }
  })

  return {
    type: POST_FORM,
    payload: post
  }
}
