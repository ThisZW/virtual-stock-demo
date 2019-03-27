import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'

class Login extends Component {
  render(){
    return(
      <Row justify="space-around" type="flex">
        <Col span={8} className="form login">
          <h3 className="title">Login</h3>
          <Input size="large"
            placeholder="Email"
          />
          <Input.Password size="large"
            placeholder="Password" 
          />
          <Button block size="large">Login</Button>
        </Col>
      </Row>
    )
  }
}

export default Login