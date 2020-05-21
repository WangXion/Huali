/* mongodb数据库封装 */


// 引入mongodb模块
const MongoClient = require('mongodb').MongoClient;

// mongodb数据库连接 URL
const url = 'mongodb://localhost:27017';

// mongodb数据库名称
const dbName = 'wxhuali';

const ObjectID = require('mongodb').ObjectID;

// mongodb连接数据库
function connectDb(callback){
  MongoClient.connect(url,(err,client)=>{
    if (err) {
      console.log(err);
      console.log("mongodb数据库连接失败");
      return;
    }
    const db = client.db(dbName);

    callback(db,client);
  })
}

// 暴露ObjectID
exports.ObjectID = ObjectID;


/* 封装mongodb数据库增删改查*/

// 查询数据
exports.find = function(collectionName,json,callback){
  /* 
  collectionName:表名
  json：查询条件,它是一个json对象，没有值默认为{}
  callback: 返回查询的数据
  */
  connectDb((db,client)=>{
    // console.log(db);
    let result = db.collection(collectionName).find(json);
    result.toArray((err,data)=>{
      if (err) {
        console.log(err);
      }
      // 返回查询到的数据，执行回调函数
      callback(data);
      // 关闭数据库连接
      client.close();
    })
  })
}

// 新增数据
exports.insert = function(collectionName,json,callback){
  /* 
  collectionName:表名
  json：插入的数据,它是一个json对象，没有值默认为{}
  callback: 返回查询的数据
  */
  connectDb((db,client)=>{

    db.collection(collectionName).insertOne(json,(err,data)=>{
      if (err) {
        console.log(err);
      }
      callback(data);
    });

  })
}

// 修改数据
exports.update = function(collectionName,json1,json2,callback){
  /* 
  collectionName:表名
  json1：条件,它是一个json对象，没有值默认为{}
  json2：修改的数据,它是一个json对象，没有值默认为{}
  callback: 返回查询的数据
  */
  connectDb((db,client)=>{

    db.collection(collectionName).updateOne(json1,{$set:json2},(err,data)=>{
      if (err) {
        console.log(err);
      }
      callback(data);
    });

  })
}

// 删除数据
exports.delete = function(collectionName,json,callback){
  /* 
  collectionName:表名
  json：条件,它是一个json对象，没有值默认为{}
  callback: 返回查询的数据
  */
  connectDb((db,client)=>{

    db.collection(collectionName).deleteOne(json,(err,data)=>{
      if (err) {
        console.log(err);
      }
      callback(data);
    });

  })
}