
import * as types from '../constants'
import * as apis from '../apis'

const userLogin = () => ({
  type: types.LOGIN_REQUEST
})

const userLoginSucceed = payload => ({
  type: types.LOGIN_SUCCEED,
  payload
})

const userLoginFail = payload => ({
  type: types.LOGIN_FAIL,
  payload
})

const userRegister = () => ({
  type: types.REGISTER_REQUEST
})

const userRegisterSucceed = payload => ({
  type: types.REGISTER_SUCCEED,
  payload
})

const userRegisterFail = payload => ({
  type: types.REGISTER_FAIL,
  payload
})

const userCheckLogin = () => ({
  type: types.TOKEN_RECEIVE,
})

const userIsLoggedIn = (payload) => ({
  type: types.TOKEN_VERIFY,
  payload
})

const userIsNotLoggedIn = () => ({
  type: types.TOKEN_RECEIVE,
})

//actions for login
export const loginUser = form => (dispatch, getState) => {
  dispatch(userLogin)
  apis.login(form)
  .then( res => {
    dispatch(userLoginSucceed(res))
  })
  .catch( e => {
    dispatch(userLoginFail(e))
  })
}

export const registerUser = form => (dispatch, getState) => {
  dispatch(userRegister)
  apis.login(form)
  .then(res => {
    dispatch(userRegisterSucceed(res))
  })
  .catch( e => {
    dispatch(userRegisterFail(e))
  })
}

export const checkUser = () => (dispatch, getState) => {
  dispatch(userCheckLogin())
  apis.user()
  .then(res => {
    dispatch(userIsLoggedIn(res))
  })
  .catch(e => {
    dispatch(userIsNotLoggedIn())
    throw e
  })
}