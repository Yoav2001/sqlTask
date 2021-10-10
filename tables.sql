-- user זה מילה שמורה לכן שם ככה
CREATE TABLE users (
	
	email varchar(50) PRIMARY KEY NOT NULL,
	pass varchar(50) NOT NULL,
    full_name varchar(50) NOT NULL,
    gender INT NOT NULL
);

-- time_post type- Date

CREATE TABLE usersPosts (
	
	post_id SERIAL PRIMARY KEY NOT NULL,	 
    poster_email_user varchar(50)  NOT NULL references users(email),
    text_post varchar(500) NOT NULL,
    time_post TIMESTAMP NOT NULL,
    url_path VARCHAR(100)
);

-- time_Comment type- Date
CREATE TABLE usersComments(
	
	comment_id SERIAL PRIMARY KEY NOT NULL,
	commenter_email_user varchar(50) NOT NULL references users(email),
    post_id_of_comment INT NOT NULL references usersPosts(post_id),
    text_comment varchar(500) NOT NULL,
    time_comment TIMESTAMP NOT NULL
);

CREATE TABLE postVotes(
	post_id INT NOT NULL references usersPosts(post_id),
	voter_email varchar(50) NOT NULL, 
    vote_up boolean NOT NULL
);

CREATE TABLE commentVotes(
    comment_id INT NOT NULL references usersComments(comment_id),
    voter_email varchar(50) NOT NULL references users(email),
    vote_up boolean NOT NULL
);


--DROP TABLE commentVotes , postVotes , usersComments , usersPosts , users;
