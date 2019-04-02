const { getDB } = require('../db')
const { md5, defaultCash } = require('../constants')

const login = async (email, password) => {
  try { 
    let res = await getDB().collection('users')
    .findOne({
      $and: [{
        email: email
      },{
        password: md5(password)
      }]
    })
    if(!res){
      throw `User does not exist`
    }
    return `Email ${email} is successfully logged in`
  } catch (e) {
    throw e
  }
}

const register = async (email, name, password) => {
  try {
    let users = await getDB().collection('users')
    let res = await users
    .findOne({
      email: email
    })
    if(res){
      throw `Email Address ${email} is already taken`
    } else {
      users.insertOne({
        name: name,
        email: email,
        password: md5(password),
        cash: defaultCash
      })
      return `Email ${email} is successfully registered`
    }

  } catch (e) {
    throw e
  }
}

module.exports = { login, register }