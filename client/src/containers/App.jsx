import React from "react";
import { Provider } from "react-redux";
import api from "../services/api";
import store from '../store'
import decode from 'jwt-decode'
import Auth from '../components/Auth'

import {setCurrentUser, addError, setToken} from '../store/actions';

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);

  try{
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch(err) {
    store.dispatch(setCurrentUser({}))
    store.dispatch(addError(err));
  }
}

const App = () => (
  <Provider store={store}>
    <Auth authType={'auth'}/>
  </Provider>
);

export default App;
