var express = require('express');
var piserialcomm = require('piserialcomm');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Welcome',
    logs: piserialcomm.SerialContext.logger.logBuffer
  });
});

router.get('/refresh', function(req, res, next) {
  res.redirect('/');
});

router.post('/send', function(req, res, next) {
  piserialcomm.SerialContext.adapter.sendToDevice(new Buffer(req.body.msg));
  res.redirect('/');
});

module.exports = router;
