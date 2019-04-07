const express = require('express');
const router = express.Router();
const { getStockQuotes } = require('../api/iex')

router.get('/quotes', async(req, res) => {
  const keys = Object.keys(req.query)
  const data = await getStockQuotes(keys)
  res.json(data)
})

router.get('/quote/:symbol', async(req, res) => {
  const key = req.params.symbol
  const data = await getStockQuote(key)
  res.json(data)
})

module.exports = router