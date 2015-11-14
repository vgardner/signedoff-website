var express = require('express');
var router = express.Router();
var request = require("request");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('List all the user\'s projects');
});

/* GET users listing. */
router.get('/register', function(req, res, next) {

  var repoPath = req.params.user + "/" + req.params.repository;
  request("http://localhost:3002/api/releases/" + repoPath, function(error, response, body) {
    res.render('releases', { title: repoPath, releaseData: body });
   });
});

module.exports = router;
