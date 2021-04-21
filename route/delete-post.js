const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');

router.get('/delete-post/:id', function(request, response) {
    var id = request.params.id;
    connection.query('DELETE FROM posts WHERE id = ?', [id], function(error, results, fields){
        if (!error) {
                response.redirect('/admin-news');
            } else {
                console.log(error);
            }
    });
});

module.exports = router;
