//Shared functions across application

import axios from 'axios';
const host = 'http://localhost:5000/api'

export const setToken = (token) => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
export const call = async (method, path, data) => {
  const response = await axios[method](`${host}/${path}`, data);
  return response.data;
}

export default {call, setToken}
