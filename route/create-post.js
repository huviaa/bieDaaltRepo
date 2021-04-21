const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');


router.post('/create-post', function(request, response){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();    
    var title = request.body.title;
    var body = request.body.body;
    var image = request.files.image;
    var fileName = image.name;
    image.mv('./public/imgs/uploaded_images/' + fileName);

    if(title && body) {
        connection.query("INSERT INTO posts(post_title, post_image, post_body, post_created_date) VALUES(?,?,?,?)", [title, fileName, body, date], function(error, results, fields){
            if(!error) {
                response.redirect('/admin-news');
            } else {
                console.log(error);
            }
        });
    }
});

module.exports = router;
