import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import { Register, Login, Portfolio, Transactions} from '../pages'

class Routes extends Component {
  render(){
    return(
      [
        <Route path="/" exact component={Portfolio} />,
        <Route path="/transactions" component={Transactions} />,
        <Route path="/login" component={Login} />,
        <Route path="/register" component={Register} />
      ]
    )
  }
}

export default Routes