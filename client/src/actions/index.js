
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

//actions for login
export const loginUser = form => (dispatch, getState) => {
  console.log('here')
  console.log(getState())
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
  console.log(getState())
  dispatch(userRegister)
  apis.login(form)
  .then(res => {
    dispatch(userRegisterSucceed(res))
  })
  .catch( e => {
    dispatch(userRegisterFail(e))
  })
}