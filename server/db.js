const mysql = require('mysql2');
require('dotenv').config({path: '../client/.env'});

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
})

const promisePool = pool.promise();

module.exports = promisePool;
