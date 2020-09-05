var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values=['Aravind','Anjaly','Sreelatha','Radhakrishnan']

  const person={name:"Aravind", admin:false,comments:{comment:"This is a comment",date:"02/09/2020"}}

  res.render('index', {person});
});

module.exports = router;
