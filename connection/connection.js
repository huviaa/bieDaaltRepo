const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '1234',
	database: 'nodelogin'
});

module.exports = connection;
