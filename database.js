const mysql = require('mysql');

var connection = mysql.createConnection({
	host : '192.168.2.222',
	database : 'batmark2',
	user : 'root',
	password : ''
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;