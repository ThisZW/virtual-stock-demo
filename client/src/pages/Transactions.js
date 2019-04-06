import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'
import { History } from '../components'
import { getTransactions } from '../apis'
class Transactions extends Component {

  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }
  
  componentDidMount = async() => {
    const transactions = await getTransactions()
    this.setState({
      transactions: transactions
    })
  };
  
  render(){
    const { transactions } = this.state
    return(
      <Row>
        <Row>
          <h1 className="page-title">Transactions</h1>
        </Row>
        <Row justify="left">
          <Col>
            {
              transactions.map( val=>{
                return <History {...val} key={val.symbol} />
              })
            }
          </Col>
        </Row>
      </Row>
    )
  }
}

export default Transactions