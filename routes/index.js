var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dog', function(req, res, next) {
  res.send("Woof, I'm a dog, after Mike branched");
};

router.get('/cat', function(req, res, next) {
  res.send('cat');
});

module.exports = router;
