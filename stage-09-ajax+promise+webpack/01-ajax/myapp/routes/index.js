var express = require('express');
var router = express.Router();

/*api通道*/
router.get('/api/one', function(req, res, next) {
   res.json({
     status_code: 200,
     result: 'hello, 初体验'
   });
});

router.get('/api/two', function(req, res, next) {
  console.log(req.query);
  res.json({
    status_code: 200,
    result: 'hello, 传参'
  });
});

router.get('/api/three', function(req, res, next) {
  console.log(req.query);
  res.json({
    status_code: 200,
    result: 'hello, 封装'
  });
});

router.post('/api/four', function(req, res, next) {
  console.log(req.path);
  res.json({
    status_code: 200,
    result: 'post...'
  });
});

router.post('/api/five', function(req, res, next) {
  console.log(req.path);
  res.json({
    status_code: 200,
    result: 'post, five...'
  });
});



/* GET home page. */
router.get('/one', function(req, res, next) {
  res.render('01-ajax请求初体验');
});

router.get('/two', function(req, res, next) {
  res.render('02-get传参');
});

router.get('/three', function(req, res, next) {
  res.render('03-利用封装的进行get请求');
});

router.get('/four', function(req, res, next) {
  res.render('04-post请求');
});

router.get('/five', function(req, res, next) {
  res.render('05-利用封装的进行post请求');
});

router.get('/six', function(req, res, next) {
  res.render('06-利用jquery进行请求');
});

module.exports = router;
