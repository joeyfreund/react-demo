'use strict';

var mysql = require('mysql');

// TODO: In a real application, values will come from the environment, not hard-coded
module.exports = mysql.createPool({
  connectionLimit: 10,
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test_db'
});
