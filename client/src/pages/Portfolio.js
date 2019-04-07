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
      portfolioTotal: 0
    }
  }

  componentDidMount = async() => {
    const portfolio = await getPortfolio()
    const cash = await getCash()
    console.log(cash)
    this.setState({
      portfolio: portfolio,
      cash: cash
    })
    this.interval = setInterval( async () => {
      const keys = Object.keys(portfolio)
      const quotes = await getStockQuotes(keys)
      let total = this.state.cash
      Object.keys(quotes).forEach( key =>{
        console.log(quotes[key].latestPrice, portfolio[key])
        total += quotes[key].latestPrice * portfolio[key]
      })
      this.setState({
        quotes : quotes,
        portfolioTotal : total
      })
    },
    2000);
  }

  setPortfolioTotal = async(portfolio, cash) => {
    
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    const { portfolio, cash, quotes, portfolioTotal } = this.state
    return(
      <Row>
        <Row>
          <h1 className="page-title">Portfolio (${portfolioTotal.toFixed(2)})</h1>
        </Row>
        <Row type="flex" justify="center">
          <Col span={10}>
            {
              Object.keys(portfolio).map((key) => {
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