import React, { Component } from 'react'
import { Row, Col, Button, Input } from 'antd'

export default class BuyShare extends Component{
  render() {
    return(
      <Row justify="space-around">
        <Col span={20} className="form buy-share">
          <h3 className="title">Cash - $6666</h3>
          <Input size="large"
            placeholder="Ticker"
          />
          <Input size="large"
            placeholder="Quantity"
          />
          <Button block size="large">Buy Share</Button>
        </Col>
      </Row>
    )
  }
}