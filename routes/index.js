var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LUK-BUD' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'LUK-BUD O nas' });
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'Galeria' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Kontakt' });
});

module.exports = router;
