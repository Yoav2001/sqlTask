CREATE TABLE t_user (
	
	email varchar(50) PRIMARY KEY NOT NULL,
	pass varchar(50) NOT NULL,
    fullName varchar(50) NOT NULL,
    gender INT  NOT NULL
);


CREATE TABLE t_post (
	
	idPost SERIAL PRIMARY KEY NOT NULL,	 
    emailUser varchar(50)  NOT NULL references t_user(email),
    textPost varchar(500) NOT NULL,
    timePost varchar(50) NOT NULL,
    urlPath VARCHAR(100)
);


CREATE TABLE t_comment(
	
	idComment SERIAL PRIMARY KEY NOT NULL,
	emailComment varchar(50) NOT NULL, 
    textComment varchar(500) NOT NULL,
    timeComment varchar(50) NOT NULL
);

CREATE TABLE t_post_votes(
	idPost INT NOT NULL references t_post(idPost),
	emailUser varchar(50) NOT NULL, 
    vote boolean NOT NULL
);

CREATE TABLE t_comment_votes(
    idComment INT NOT NULL references t_comment(idComment),
    emailUser varchar(50) NOT NULL references t_user(email),
    vote boolean NOT NULL
);


