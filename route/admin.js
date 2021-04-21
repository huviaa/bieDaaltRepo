const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../connection/connection');

router.get("/admin-users", function(request, response) {
    if (request.session.loggedin) {
        connection.query('SELECT * FROM accounts', function (error, results, fields) {
            console.log(results);
            response.render("pages/admin-users", {users: results});
        });
    }
});

module.exports = router;
