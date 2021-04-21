const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');

router.get('/edit-post/:id', function(request, response) {
    var id = request.params.id;
    connection.query('SELECT * FROM posts WHERE id = ?', [id], function(error, results, fields){
        if (!error) {
                response.render('posts/edit-post', {posts: results[0]});
                console.log(results);
            } else {
                console.log(error);
            }   response.end();
    });
});

router.post('/edit-post/:id', function(request, response) {
    var title = request.body.title;
    var body = request.body.body;
    var image = request.files.image;
    var fileName = image.name;
    image.mv('./public/imgs/uploaded_images/' + fileName);
    var id = request.params.id;
    connection.query('UPDATE posts SET post_title=?, post_body=?, post_image=? WHERE id = ?', [title,body,fileName,id], function(error, results, fields){
        if (!error) {
                response.redirect("/admin-news");
            } else {
                console.log(error);
            }
    });
});

module.exports = router;
