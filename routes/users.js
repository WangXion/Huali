var express = require('express');
var router = express.Router();
//引入MongoDB封装模块
var db = require('../modules/db.js');
//引入图片上传模块
var multiparty = require('multiparty');
//引入fs模块
var fs = require('fs');

/* GET home page. */
//
router.get('/', function (req, res, next) {
  db.find('users', {}, (data) => {
    res.send(data)
    // res.json(data);
    // console.log(data)

  })

});
//注册
router.post('/Register', function(req, res, next) {
      //  console.log(req.body);
       let json=req.body;
      //  console.log(json.username)
        db.find('users',{},(data)=>{
            // console.log(data)
         let  zhi=data.some((item)=>{  
                return json.username==item.username    
            })
            // console.log(zhi)
            if (zhi) {
                res.send("400")
              }else{
                  db.insert('users',{
                      "id":data.length+1,
                      'username':req.body.username,
                      'password':req.body.password
                  },(data)=>{
                    // console.log(data)
                    if (data.result.n==1) {
                       res.send("200") 
                    }else{
                      console.log(error)
                    }
                   
                  })

              }
         }) 
       
       
});
//添加用户
router.post('/users', function(req, res, next) {
  //  console.log(req.body);
   let json=req.body;
  //  console.log(json)
    db.find('users',{},(data)=>{
        // console.log(data)
     let  zhi=data.some((item)=>{  
            return json.username==item.username    
        })
        // console.log(zhi)
        if (zhi) {
            res.send("400")
          }else{
              db.insert('users',{
                  "id":data.length+1,
                  'username':req.body.username,
                  'password':req.body.password
              },(data)=>{
                // console.log(data)
                if (data.result.n==1) {
                   res.send("200") 
                }else{
                  console.log(error)
                }
               
              })

          }
     }) 
   
   
});
//修改用户
router.post('/update', function(req, res, next) {
  //  console.log(req.body);
   let json=req.body;
   console.log(json)
    // db.find('users',{},(data)=>{
    //     // console.log(data)
    //  let  zhi=data.some((item)=>{  
    //         return json.username==item.username    
    //     })
    //     // console.log(zhi)
    //     if (zhi) {
    //         res.send("400")
    //       }else{
    //           db.insert('users',{
    //               "id":data.length+1,
    //               'username':req.body.username,
    //               'password':req.body.password
    //           },(data)=>{
    //             // console.log(data)
    //             if (data.result.n==1) {
    //                res.send("200") 
    //             }else{
    //               console.log(error)
    //             }
               
    //           })

    //       }
    //  }) 
   
   
});

//删除用户
router.post('/delete', function(req, res, next) {
  //  console.log(req.body);
   let jsonId=req.body;
  //  console.log(jsonId.id)
  //  console.log(jsonId)

   db.delete('users',jsonId,(data)=>{
     console.log(data.result)
     if (data.result.n==1) {
       res.send('200')
     }
   })
   
   
});



module.exports = router;
