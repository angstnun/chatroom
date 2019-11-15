var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/hi', (req, res) => {
  res.setHeader('content-type', 'text/plain');
  timeout(() => {
    res.send("Hello world!");
  }, 10000)
})

module.exports = router;
