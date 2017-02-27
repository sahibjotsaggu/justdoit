var express = require('express');
var router = express.Router();
var md = require('../data/mainData.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Just Do It!',
    mainData: md
  });
});

module.exports = router;
