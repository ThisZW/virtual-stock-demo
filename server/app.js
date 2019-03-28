const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const port = 3003

const db = require( './db' )

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); 
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const server = http.createServer(app)

db.connectDB( cb => {
  server.listen(port, () => console.log(`TTP-stock server listening on port ${port}!`))
})

module.exports = app;
