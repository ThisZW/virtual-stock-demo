const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken")
const { secretKey } = require('../constants');

const jwtAuth = expressJwt({secret: secretKey}).unless({path: ["/api/user/login", "/api/user/register"]}); 

const getToken = (email) =>{
  return jwt.sign({
    name: email,
  }, secretKey ,{
    expiresIn: 360000
  })
}

module.exports = {jwtAuth, getToken};
