import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Register, Login, Portfolio, Transactions} from '../pages'
import { connect } from 'react-redux'
import { loginUser, registerUser, checkUser } from '../actions'

const Routes = ({ user, message, loginUser, registerUser }) => {
  const { isLoggedIn } = user
  return(
    [
      <Route path="/" exact 
        render={() =>
          <Portfolio isLoggedIn={isLoggedIn}/>
        } />,
      <Route path="/transactions"
        render={() => 
          <Transactions isLoggedIn={isLoggedIn}/>
        } />,
      <Route path="/login" 
        render={() => 
          <Login loginUser={loginUser} isLoggedIn={isLoggedIn} message={message}/>
        } />,
      <Route path="/register" 
        render={() => 
          <Register registerUser={registerUser} isLoggedIn={isLoggedIn} message={message}/>
        } />  
    ]
  )
}

Routes.propTypes = {
  loginUser: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  ...state
})

export default connect(
  mapStateToProps,
  { loginUser, registerUser }
)(Routes)