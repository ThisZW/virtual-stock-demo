const express = require('express');
const router = express.Router();
const { login, register } = require('../models/user')
const { getToken } = require('../auth')

router.get('/test', (req, res) => {
  console.log(res.locals.user)
  res.send(res.locals.user)
})

router.post('/login', (req, res) => {
  const { email, password } = req.body
  login(email, password)
  .then( message => {
    res.json({
      success: message,
      token: getToken(email)
    })  
  })
  .catch( e => {
    res.status('409').send(`Error: ${e}`)
  })
})

router.post('/register', (req, res, next) => {
  const { email, name, password } = req.body
  register(email, name, password)
  .then( message => {
    res.json({
      success: message,
      token: getToken(email)
    })
  })
  .catch( e => {
    res.status('409').send(`Error: ${e}`)
  })
})


module.exports = router;
