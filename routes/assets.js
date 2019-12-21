var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/assets/js/jquery.min.js', function(req,res){
  var temp= fs.readFileSync('./assets/js/jquery.min.js');
  res.send(temp);
})




module.exports = router;
