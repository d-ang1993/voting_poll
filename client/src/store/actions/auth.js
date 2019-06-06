import {addError, removeError} from './error'
import {SET_CURRENT_USER} from '../actionTypes'

import API from '../../services/api';


export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

export const setToken = token => {
  API.setToken(token);
};

export const logout = () => dispatch => {
  localStorage.clear()
  API.setToken(null);
  dispatch(setCurrentUser({}));
  dispatch(removeError());

}

export const authUser =  (path, data) => async dispatch => {
  try {
    const { token, ...user } = await API.call('post', `${path}`, data);
    localStorage.setItem('jwtToken', token)
    API.setToken(token);

    dispatch(setCurrentUser(user));
    dispatch(removeError());
  } catch (err) {
    const { error } = err.response.data
  }
}