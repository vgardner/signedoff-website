var express = require('express');
var router = express.Router();
var request = require("request");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/:user/:repository', function(req, res, next) {

  var repoPath = req.params.user + "/" + req.params.repository;
  request("http://localhost:3001/api/releases/" + repoPath, function(error, response, body) {
    res.render('index', { title: repoPath, releaseData: body });
   });
});

router.get('/dev', function(req, res, next) {
  res.render('releases', { title: 'Releases for Go Lights' });
});

module.exports = router;
