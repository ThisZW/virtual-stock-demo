import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'

class Register extends Component {
  render(){
    return(
      <Row justify="space-around" type="flex">
        <Col span={8} className="form login">
          <h3 className="title">Register</h3>
          <Input size="large"
            placeholder="Name"
          />
          <Input size="large"
            placeholder="Email"
          />
          <Input.Password size="large"
            placeholder="Password" 
          />
          <Button block size="large">Register</Button>
        </Col>
      </Row>
    )
  }
}

export default Register