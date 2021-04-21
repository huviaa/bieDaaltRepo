const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../connection/connection');

router.get("/single/:id", function(request, response) {
    var id = request.params.id;
        connection.query('SELECT * FROM posts WHERE id = ?', [id], function (error, results, fields) {
            response.render("pages/single", {singlePost: results[0]});
        });
});

module.exports = router;
