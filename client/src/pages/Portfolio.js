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
      cash: 0,
      quotes: {},
    }
  }

  componentDidMount = async() => {
    const portfolio = await getPortfolio()
    const cash = await getCash()
    this.setState({
      portfolio: portfolio,
      cash: cash
    })
    this.interval = setInterval( async () => {
      const keys = Object.keys(portfolio)
      const quotes = await getStockQuotes(keys)
      this.setState({quotes : quotes})
    },
    2000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    const { portfolio, cash, quotes } = this.state
    return(
      <Row>
        <Row>
          <h1 className="page-title">Portfolio (${cash})</h1>
        </Row>
        <Row type="flex" justify="center">
          <Col span={10}>
            {
              Object.keys(portfolio).map((key) => {
                console.log(key, quotes[key])
                return <Share 
                symbol={key}
                key={key}
                quantity={portfolio[key]}
                {...quotes[key]}
                />
              })
            }
          </Col>
          <Col span={3} className="portfolio-middle-line"></Col>
          <Col span={9} offset={2}>
            <BuyShare cash={cash} />
          </Col>
        </Row>
      </Row>
    )
  }

}

export default Portfolio