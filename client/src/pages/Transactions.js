import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import { History } from '../components'

class Transactions extends Component {
  render(){
    return(
      <Row>
        <Row>
          <h1 className="page-title">Transactions</h1>
        </Row>
        <Row justify="left">
          <Col>
            <History/>
            <History/>
          </Col>
        </Row>
      </Row>
    )
  }
}

export default Transactions