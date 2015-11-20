var express = require('express');
var router = express.Router();
var request = require("request");

/* GET projects listing. */
router.get('/', function(req, res, next) {
  res.render('projects', {
  	title: 'Projets'
  });
});

module.exports = router;
