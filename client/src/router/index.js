import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Register, Login, Portfolio, Transactions} from '../pages'
import { connect } from 'react-redux'
import { loginUser, registerUser, checkUser } from '../actions'

class Routes extends Component {
  
  render(){
    return(
      [
        <Route path="/" exact 
          render={() =>
            <Portfolio />
          } />,
        <Route path="/transactions"
          render={() => 
            <Transactions />
          } />,
        <Route path="/login" 
          render={() => 
            <Login loginUser={this.props.loginUser}/>
          } />,
        <Route path="/register" 
          render={() => 
            <Register registerUser={this.props.registerUser}/>
          } />
      ]
    )
  }
}

Routes.propTypes = {
  loginUser: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  state: state
})

export default connect(
  mapStateToProps,
  { loginUser, registerUser }
)(Routes)