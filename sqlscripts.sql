CREATE DATABASE `nodeproject`

/* Basic users table to validate user login */
CREATE TABLE users(
   userid VARCHAR(40) primary key,
   pass_word VARCHAR(255) not null,
   phonenumber VARCHAR(10) not null,
   email VARCHAR(255) not null
)

/* Basic data of two rows into users table for testing */
insert into users values('Raja','Raja','8019800208','i.rajendra@rocketmail.com')
insert into users values('Vijay','Guru','7799258876','vijay@rocketmail.com')

/* Basic address table to capure address details */
create table address(userid varchar(40) not null references users.userid, 
	firstname varchar(25) not null, 
    lastname varchar(25) not null,
    housenumber varchar(25) not null,
    area varchar(100) not null,
    city varchar(50) not null,
    zipcode varchar(10) not null,
    phonenumber varchar(10) primary key
)

/* Basic data of two rows into address table for testing */
insert into address values('Vijay', 'Vijay', 'Dirisala', '9999', 'Jefferson Parish', 'Seattle', '34567','7799258876')
insert into address values('Raja', 'Rajendra', 'Itchapruapu', '7777', 'Miyapur', 'Hyderabad', '500049','8019800208')
