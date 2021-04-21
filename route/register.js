const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');

router.post('/register', function(request, response) {
    var email = request.body.email;
    var username = request.body.username;
    var password = request.body.password;
    if(email && username && password) {
        connection.query("INSERT INTO accounts (email, username, password) VALUES('"+request.body.email+"','"+request.body.username+"','"+request.body.password+"')", [email, username, password], function(error, results, fields){
            response.redirect('/login');
        });
    }
});

module.exports = router;
