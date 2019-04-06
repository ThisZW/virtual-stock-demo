const { getDB } = require('../db')

const getUserCash = async (email) => {
  try { 
    let res = await getDB().collection('users')
    .findOne({email: email})
    if(!res){
      throw `Error getting cash`
    }
    return res.cash
  } catch (e) {
    throw e
  }
}

const getUserPortfolio = async (email) => {
  try {
    let res = await getDB().collection('users')
    .findOne({email: email})
    if(!res){
      throw `Error getting portfolio`
    }
    return res.portfolio
  } catch (e) {
    throw e
  }
}

const getUserTransactions = async (email) => {
  try {
    let res = await getDB().collection('users')
    .findOne({email: email})
    if(!res){
      throw `Error getting transactions`
    }
    return res.transactions
  } catch (e) {
    throw e
  }
}

const setUserShare = (email, code, qty) => {
  
}

module.exports = { getUserCash, getUserPortfolio, getUserTransactions, setUserShare }