const mysql = require('mysql');

// Set database connection credentials
const config = {
  host: 'appme.store',
  user: 'apphostv_admin',
  password: '1qazXSW@#edc',
  database: 'apphostv_appme',
  port: '3306'
};

var conn = mysql.createConnection(config);

// //kết nối.
conn.connect(function (err){
  //nếu có nỗi thì in ra
  if (err) throw err.stack;
  //nếu thành công
  else console.log('Connection Successfully');
  
});

//Create a MySQL pool
const pool = mysql.createPool(config);

//Export the pool
module.exports = pool;