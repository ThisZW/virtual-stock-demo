import React, { Component } from 'react'
import {Row, Col} from 'antd'

export default class History extends Component{
  render(){
    return(
      <Row type="flex" justify="start">
        <Col span={14} className="history">
          <div>
            BUY (APPL) - 6 Shares @ 300.00
          </div>
        </Col>
      </Row>
    )
  }
}