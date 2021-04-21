const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');

router.get('/edit/:id', function(request, response) {
    var id = request.params.id;
    connection.query('SELECT * FROM accounts WHERE id = ?', [id], function(error, results, fields){
        if (!error) {
                response.render('user/edit', {user: results[0]});
                console.log(results);
            } else {
                console.log(error);
            }   response.end();
    });
});

router.post('/edit/:id', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    var image = request.files.image;
    var fileName = image.name;
    image.mv('./public/imgs/uploaded_images/' + fileName);
    var id = request.params.id;
    connection.query('UPDATE accounts SET username=?, password=?, email=?, image=? WHERE id = ?', [username,password,email,fileName,id], function(error, results, fields){
        if (!error) {
                response.redirect("/admin-users");
            } else {
                console.log(error);
            }
    });
});

module.exports = router;
