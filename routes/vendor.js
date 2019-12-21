var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/vendor/jquery/jquery.min.js', function(req,res){
  var temp= fs.readFileSync('./vendor/jquery/jquery.min.js');
  res.send(temp);
})

router.get('/vendor/bootstrap/js/bootstrap.min.js', function(req,res){
  var temp= fs.readFileSync('./vendor/bootstrap/js/bootstrap.min.js');
  res.send(temp);
})

router.get('/vendor/bootstrap/js/bootstrap.bundle.min.js', function(req,res){
  var temp= fs.readFileSync('./vendor/bootstrap/js/bootstrap.bundle.min.js');
  res.send(temp);
})

router.get('/vendor/jquery-easing/jquery.easing.min.js', function(req,res){
  var temp= fs.readFileSync('./vendor/jquery-easing/jquery.easing.min.js');
  res.send(temp);
})


router.get('/vendor/bootstrap/css/bootstrap.min.css', function(req,res){
  var temp= fs.readFileSync('./vendor/bootstrap/css/bootstrap.min.css');
  res.send(temp);
})

module.exports = router;
