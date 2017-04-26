var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var firebase = require('firebase');

var index = require('./routes/index');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var config = {
  apiKey: "AIzaSyBLTfGyRsez9Zvv_JxP95rSw_Nmzcws-eQ",
  authDomain: "justdoit-9ee42.firebaseapp.com",
  databaseURL: "https://justdoit-9ee42.firebaseio.com",
  projectId: "justdoit-9ee42",
  storageBucket: "justdoit-9ee42.appspot.com",
  messagingSenderId: "904179461954"
};

firebase.initializeApp(config);

app.use('/', index);

// catch 404 and forward error handler
app.use(function(req, res, next) {
	var err = new Error('Page not found.');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
