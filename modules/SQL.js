/* mysql数据库封装 */

// 引入mysql模块
let mysql = require('mysql');

// mysql数据库连接配置
let connection = mysql.createConnection({
  host:'localhost',       // 主机
  user:'root',            // 用户名
  password:'',            // 用户密码
  port:'3306',            // 端口号
  database:'huali'        // 数据库名称
})

// mysql数据库连接
connection.connect((err,result)=>{
  if (err) {
    console.log(err + '数据库连接失败');
    return;
  }
  console.log(result + '数据库连接成功');
})


// 查询数据

// let selectSql = 'SELECT * FROM users';

exports.select = function(sql,callback){
  /* 
    sql: 表示查询语句
    callback: 回调函数
  */
  connection.query(sql,(err,result)=>{
    if (err) {
      console.log(err + '查询数据失败');
      return;
    }
    // console.log(result);
    callback(result);
  });

  // mysql数据库结束连接
//   connection.end(); 
} 

// 增加数据

// let sql = 'INSERT INTO users (id,username,password) VALUES (0,?,?)';
// let data = ['lisi','112233'];

exports.insert = function(sql,data,callback){
  /* 
    sql: 表示查询语句
    data: 表示增加的数据，数据类型是数组[]
    callback: 回调函数
  */
  connection.query(sql,data,(err,result)=>{
    if (err) {
      console.log(err + '增加数据失败');
      return;
    }
    // console.log(result);
    callback(result);
  });

  // mysql数据库结束连接
//   connection.end();  

} 

// 更新数据

// let sql = 'UPDATE users SET username = ?, password = ? WHERE id = ?';
// let data = ['wuwang','332211',1];

exports.update = function(sql,data,callback){
  /* 
    sql: 表示查询语句
    data: 表示增加的数据，数据类型是数组[]
    callback: 回调函数
  */
  connection.query(sql,data,(err,result)=>{
    if (err) {
      console.log(err + '更新数据失败');
      return;
    }
    // console.log(result);
    callback(result);
  });

  // mysql数据库结束连接
//   connection.end(); 
}

// 删除数据

// let sql = 'DELETE FROM users where id = 4';

exports.delete = function(sql,callback){
  /* 
    sql: 表示查询语句
    callback: 回调函数
  */
  connection.query(sql,(err,result)=>{
    if (err) {
      console.log(err + '删除数据失败');
      return;
    }
    // console.log(result);
    callback(result);
  });

  // mysql数据库结束连接
//   connection.end(); 
}


// mysql数据库结束连接
// connection.end();  

// module.exports = connection;