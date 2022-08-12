//导入mysql模块
const mysql = require('mysql');
//建立与mysql数据库的连接关系
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的ip
    user: 'root', //数据库登录账号
    password: 'admin123', //数据库登录密码
    database: 'my_db_01', //指定操作哪个数据库
});
//封装数据库操作语句 sql语句 参数数组arr callback成功函数结果
function sqlFn(sql, arr, callback) {
    client.query(sql, arr, function(err, result) {
        if (err) return console.log('语句错误');
        callback(result)
    })
}
module.exports = sqlFn