import { 
  LOGIN_REQUEST, LOGIN_SUCCEED, LOGIN_FAIL, 
  REGISTER_FAIL, REGISTER_SUCCEED, REGISTER_REQUEST 
} from '../constants'
import { combineReducers } from 'redux';

const initialState = {
  status: '',
}

const login = (state = initialState, {type, payload} ) => {
  switch(type){
    case LOGIN_REQUEST:
      return {
        ...state,
        status: 'Logging in'
      }
    case LOGIN_FAIL:
      return {
        ...state,
        status: 'Failed to Log in'
      }
    case LOGIN_SUCCEED:
      window.localStorage.setItem('token', payload.token)
      return {
        ...state,
        status: payload.success
      }
    default: 
      return state
  }
}

const register = (state = initialState, {type, payload} ) => {
  switch(type){
    case REGISTER_REQUEST:
      return {
        ...state,
        status: 'Registering'
      }
    case REGISTER_FAIL:
      return {
        ...state,
        status: 'Failed to register'
      }
    case REGISTER_SUCCEED:
      window.localStorage.setItem('token', payload.token)
      return {
        ...state,
        status: payload.success
      }
    default:
      return state
  }
}

export default combineReducers({
  login,
  register,
})