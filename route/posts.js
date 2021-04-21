const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../connection/connection');

router.get("/admin-news", function(request, response) {
    if (request.session.loggedin) {
        connection.query('SELECT * FROM posts', function (error, results, fields) {
            console.log(results);
            response.render("pages/admin-news", {posts: results});
        });
    }
});

module.exports = router;
