var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/address', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //res.render('address', { title: 'Address' });
  console.log('In the address.js file')
  res.send('Addresses shortly')
});

module.exports = router;