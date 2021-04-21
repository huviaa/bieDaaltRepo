const express = require('express');
const router = express.Router();
const connection = require('../connection/connection');

router.get('/delete/:id', function(request, response) {
    var id = request.params.id;
    connection.query('DELETE FROM accounts WHERE id = ?', [id], function(error, results, fields){
        if (!error) {
                response.redirect('/admin-users');
            } else {
                console.log(error);
            }
    });
});

module.exports = router;
