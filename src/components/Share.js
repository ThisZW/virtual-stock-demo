import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'

export default class Share extends Component {
  render(){
    return(
      <Row className="share">
        <Col span={16}>
          <div>
            APPL - 6 Shares
          </div>
        </Col>
        <Col span={8}>
          <div className="price">
            $666
          </div>
        </Col>
      </Row>
    )
  }
}