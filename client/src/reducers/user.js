import { 
  LOGIN_REQUEST, LOGIN_SUCCEED, LOGIN_FAIL, 
  REGISTER_FAIL, REGISTER_SUCCEED, REGISTER_REQUEST, 
  TOKEN_RECEIVE, TOKEN_VERIFY, TOKEN_REJECT
} from '../constants'
import { combineReducers } from 'redux';

const initialState = {
  status: '',
}

const initUser = {
  isLoggedIn: true,
  email: '',
  name: '',
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

const user = (state = initUser, {type, payload} ) => {
  switch(type){
    case TOKEN_RECEIVE:
      return state
    case TOKEN_VERIFY:
      return {
        ...state,
        isLoggedIn: true,
        email: payload.email,
        name: payload.name
      }
    case TOKEN_REJECT:
      return initUser
    default:
      return state
  }
}

export default combineReducers({
  login,
  register,
  user,
})