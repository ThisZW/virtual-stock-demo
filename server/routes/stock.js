const express = require('express');
const router = express.Router();
const { getUserCash, getUserPortfolio } = require('../models/stock')

router.get('/cash', async (req, res) => {
  const cash = await getUserCash(res.locals.user.email)
  res.json({cash: cash})
})

router.get('/portfolio', async (req, res) => {
  const portfolio = await getUserPortfolio(res.locals.user.portfolio)
  res.json({portfolio: portfolio})
})

module.exports = router