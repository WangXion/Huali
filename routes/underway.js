var express = require('express');
var router = express.Router();
//引入MongoDB封装模块
var db = require('../modules/db.js');
//引入图片上传模块
var multiparty = require('multiparty');
//引入fs模块
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  db.find('Underway', {}, (data) => {
    res.send(data)
    // res.json(data);
    // console.log(data)

  })

});




module.exports = router;
