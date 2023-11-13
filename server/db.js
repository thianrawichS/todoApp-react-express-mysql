const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'db_todo'
})

const promisePool = pool.promise();

module.exports = promisePool;
