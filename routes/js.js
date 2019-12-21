var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/js/jqBootstrapValidation.js', function(req,res){
  var temp= fs.readFileSync('./js/jqBootstrapValidation.js');
  res.send(temp);
})

router.get('/js/contact_me.js', function(req,res){
  var temp= fs.readFileSync('./js/contact_me.js');
  res.send(temp);
})

router.get('/js/agency.min.js', function(req,res){
  var temp= fs.readFileSync('./js/agency.min.js');
  res.send(temp);
})
module.exports = router;
