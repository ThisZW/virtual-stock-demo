const express = require('express');
const router = express.Router();
const { login, register } = require('../models/user')
const { jwtAuth, getToken} = require('../auth')

router.use(jwtAuth)

router.post('/login', (req, res, next) => {
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
