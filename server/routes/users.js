const express = require('express');
const { inspect } = require('util')
const router = express.Router();
const db = require('../db');

/* GET users listing. */
router.get('/test', async (req, res, next) => {
  res.json({'user': await getUser()})
});

const getUser = async() => {
  const dbres = db.getDB()
  let res 
  try { 
    res = await dbres.collection('users').findOne({email: 'testEmail'})
    return res
  } catch (e) {
    throw e
  }
}

module.exports = router;
