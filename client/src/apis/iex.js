import axios from 'axios'

axios.defaults.baseURL= 'https://api.iextrading.com/1.0/stock/'

export const getStockQuote = (symbol) => {
  return axios.get( symbol + '/quote' )
  .then( res => {
    return res.data
  })
  .catch( e => {
    throw e
  })
}