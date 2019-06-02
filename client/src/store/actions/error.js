import {ADD_ERROR, REMOVE_ERROR} from '../actionTypes'

export const addError = error => dispatch => ({
  type: ADD_ERROR,
  error
})

export const removeError = () =>  dispatch => ({
  type: REMOVE_ERROR
})
