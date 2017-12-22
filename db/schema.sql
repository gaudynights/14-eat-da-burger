create database burger_db;

use burger_db;

create table burgers(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	date TIMESTAMP,
	PRIMARY KEY (id)
); 