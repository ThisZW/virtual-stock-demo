import axios from 'axios'

axios.defaults.baseURL= '/api'

export const getStockQuotes = (symbols) =>{
  const queries = symbols.join('&')
  console.log(`/iex/quotes?${queries}`)
  return axios.get(`/iex/quotes?${queries}`)
  .then( res => {
    return res.data
  })
  .catch( err => {
    throw err.response.data
  })
}