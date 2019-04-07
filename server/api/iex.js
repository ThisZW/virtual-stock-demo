const axios = require('axios')

const getStockQuotes = (symbols) => {
  let proms = symbols.map( v=>
    axios.get(`https://api.iextrading.com/1.0/stock/${v}/quote`)
    .then( res=> {
      return {
        symbol: res.data.symbol,
        companyName: res.data.companyName,
        latestPrice: res.data.latestPrice,
        openPrice: res.data.open
      }
    })
    .catch( err => {
      return err.response.data
    })
  )
  return axios.all(proms)
  .then( res => {
    let dataObj = {}
    res.forEach( v=>{
      dataObj[v.symbol] = {
        ...v
      }
    })
    return dataObj
  })
  .catch( err => {
    return err
  })
}

const getStockQuote = (symbol) => {
  return axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
  .then( res => {
    return {
      [symbol] : {
        symbol: res.data.symbol,
        companyName: res.data.companyName,
        latestPrice: res.data.latestPrice,
        openPrice: res.data.open
      }
    }
  })
  .catch( err => {
    return err.response.data
  })
}

module.exports = { getStockQuotes, getStockQuote }