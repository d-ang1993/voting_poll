import {createStore} from 'redux'
import thunk from 'redux_thunk'
import rootReducer from './reducers'

const DEFAULT_STATE = {
  error: {message: null}
}
export const store = createStore(
  rootReducer,
  DEFAULT_STATE
);
