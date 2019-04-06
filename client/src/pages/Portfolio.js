import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import { Share } from '../components'
import { BuyShare } from '../components'
import { getPortfolio, getCash, getStockQuotes } from '../apis'

class Portfolio extends Component {

  constructor(){
    super()
    this.state = {
      portfolio: {},
      cash: 0
    }
  }

  componentDidMount = async() => {
    const portfolio = await getPortfolio()
    const cash = await getCash()
    this.setState({
      portfolio: portfolio,
      cash: cash
    })
  }
  
  render(){
    const { portfolio, cash } = this.state
    return(
      <Row>
        <Row>
          <h1 className="page-title">Portfolio (${cash})</h1>
        </Row>
        <Row type="flex" justify="center">
          <Col span={10}>
            {
              Object.keys(portfolio).map((key) => {
                return <Share symbol={key} key={key} quantity={portfolio[key]}/>
              })
            }
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