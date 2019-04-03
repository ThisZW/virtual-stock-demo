import React, { Component } from 'react'
import { Row, Col, Input, Button, Form, Icon } from 'antd'

class Register extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.registerUser(values)
      }
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return(
      <Row justify="space-around" type="flex">
        <Col span={8} className="form login">
          <Form onSubmit={this.handleSubmit}>
            <h2 className="title">Register</h2>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  {required: true, message: "Please type your username"},
                ]
              })(
                <Input size="large"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [
                  {required: true, message: "Please type your email address"},
                  {type: 'email', message: 'The input is not valid E-mail!'}
                ]
              })(
                <Input size="large"
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="Email"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {required: true, message: "Please type your password"},
                  {min: 8, message: "Password must be greate than 8 letters"}
                ]
              })(
                <Input.Password size="large"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="Password" 
                />
              )}
            </Form.Item>
            <Button block htmlType="submit" size="large">Login</Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default Form.create({ name: 'register'})(Register)