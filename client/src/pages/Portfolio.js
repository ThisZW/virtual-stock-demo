import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import { Share } from '../components'
import { BuyShare } from '../components'

class Portfolio extends Component {
  render(){
    return(
      <Row>
        <Row>
          <h1 className="page-title">Portfolio ($4444)</h1>
        </Row>
        <Row type="flex" justify="center">
          <Col span={10}>
            <Share/>
            <Share/>
          </Col>
          <Col span={3} className="portfolio-middle-line"></Col>
          <Col span={9} offset={2}>
            <BuyShare/>
          </Col>
        </Row>
      </Row>
    )
  }
}

export default Portfolio