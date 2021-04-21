var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var connection = require('./connection/connection');
var dotenv = require('dotenv');
var ejs = require('ejs');
var fileUpload = require('express-fileupload');


var login = require('./route/login');
var register = require('./route/register');
var admin = require('./route/admin');
var createUser = require('./route/create-user');
var editUser = require('./route/edit-user');
var deleteUser = require('./route/delete-user');
var createPost = require('./route/create-post');
var posts = require('./route/posts');
var editPost = require('./route/edit-post');
var deletePost = require('./route/delete-post');
var singlePost = require('./route/single');


dotenv.config();

module.exports = connection;
var app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(fileUpload());

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/')));
app.use(express.static("../Blog-master"));


app.use('/', login);
app.use('/', register);
app.use('/', admin);
app.use('/', createUser);
app.use('/', editUser);
app.use('/', deleteUser);
app.use('/', createPost);
app.use('/', posts);
app.use('/', editPost);
app.use('/', deletePost);
app.use('/', singlePost);



app.get('/', function (request, response) {
	connection.query('SELECT * FROM posts', function (error, results, fields) {
		response.render('pages/index', { news: results });
	});
});
app.get('/about', function (request, response) {
	response.render('pages/about');
});
app.get('/contact', function (request, response) {
	response.render('pages/contact');
});
app.get('/single', function (request, response) {
	response.render('pages/single');
});
app.get('/login', function (request, response) {
	response.render('pages/login');
});
// app.get('/admin-news', function(request, response) {
// 	response.render('pages/admin-news');
// });
app.get('/admin-comments', function (request, response) {
	response.render('pages/admin-comments');
});
app.get('/admin-users', function (request, response) {
	response.render('pages/admin-users');
});
app.get('/create-user', function (request, response) {
	response.render('user/create-user');
});
// app.get('/edit', function(request, response){
//     response.render('user/edit');
// });


app.listen(process.env.SERVER_PORT, () => console.log(`Server Start ${process.env.SERVER_PORT}`));
