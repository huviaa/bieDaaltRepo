const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');

router.post('/create-user', function(request, response) {
    var email = request.body.email;
    var username = request.body.username;
    var image = request.files.image;
    var fileName = image.name;
    image.mv('./public/imgs/uploaded_images/' + fileName);
    var password = request.body.password;
    if(email && username && password) {
        connection.query("INSERT INTO accounts (email, username, password, image) VALUES(?,?,?,?)", [email, username, password, fileName], function(error, results, fields){
            if (!error) {
                response.redirect('/admin-users');
            } else {
                console.log(error);
            } response.end();
        });
    }
});

module.exports = router;
