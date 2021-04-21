const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');

router.get('/logout', function(request, response){
    request.session.loggedin = false;
    request.session.username = "";
    connection.query('SELECT * FROM posts',function(error, results, fields) {
	response.render('pages/index', {news: results});
    });
});

router.post('/login', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/admin-news');
			} else {
				response.render('login', {error:'Incorrect Username and/or Password!'});
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

module.exports = router;
