# Blog

#repository-g tataj esvel git clone hiij tataj avna. ashiglagdah sanguud package.json dotor baigaa uchir terminal deer npm install commandiig ogoj sanguudiig tatna.
#ajilluulahdaa npm start commandiig terminal dre ogohod localhost:3000 port dr server asna.
#admin panel ruu login hiij orohod
#news:
#update tovch deer medeeg shinechilne
#delete tovch deer medeeg ustgana
#add-news tovch deer shine medee oruulah bolomjtoi.
#users:
#update tovch hereglegchiin medeelliig shinechilne
#delete toch hereglegchiig ustgana
#create user tovch shine hereglegch burtgeh bolomjtoi
#logout:
#admin panelaas logout hiij garna.

#Baaz uusgeh
CREATE DATABASE IF NOT EXISTS `nodelogin` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `nodelogin`;

CREATE TABLE IF NOT EXISTS `students` (
`id` int(11) NOT NULL,
`firstname` varchar(50) NOT NULL,
`lastname` varchar(50) NOT NULL,
`password` varchar(255) NOT NULL,
`email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `posts` (
`id` int(11) NOT NULL,
`post_title` varchar(255) NOT NULL,
`post_image` varchar(255) NOT NULL,
`post_body` varchar(255) NOT NULL,
`post_created_date` varchar(50) NOT NULL,
primary key (id)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
ALTER TABLE `posts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
