
-- create users
create table users (user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, alias varchar(255),  email varchar(255), avatar varchar(255));

-- create issues
create table issues (issue_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title varchar(255) NOT NULL, description TEXT);

-- create associative table
CREATE TABLE users_issues (
  user_id INT NOT NULL,
  issue_id INT NOT NULL,
  created_on DATETIME NOT NULL,
  PRIMARY KEY (issue_id, user_id),
  INDEX user_idx (user_id ASC),
  CONSTRAINT user
    FOREIGN KEY (user_id)
    REFERENCES users (user_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT issue
    FOREIGN KEY (issue_id)
    REFERENCES issues (issue_id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- insert users
insert into users (alias, email, avatar) values ('2pac', '2pacshakur@hh.com', '2p');
insert into users (alias, email, avatar) values ('biggie', 'thenotouriusbig@hh.com', 'nb');
insert into users (alias ,email, avatar) values ('jay-z', 'jayz@hh.com', 'jz');
insert into users (alias ,email, avatar) values ('Snoop','snoopdog@hh.com', 'sd');
insert into users (alias ,email, avatar) values ('Nas','nas@hh.com', 'na');
insert into users (alias ,email, avatar) values ('Public Enemy', 'publicenemy@hh.com', 'pe');

-- insert issues
INSERT INTO issues (title, description) values ('Who Shot Ya', '2Pac appeared on numerous tracks aiming threatening or antagonistic insults at Biggie, Bad Boy');
insert into issues (title, description) values ('Bomb First', "Can't talk with a gun in your mouth huh?...Bitch-ass nigga, what?");
insert into issues (title, description) values ('2-pac shot', "Who shot me? But ya punks didn't finish now you 'bout to feel the wrath of a menace nigga, I hit ‘em up!");
insert into issues (title, description) values ('Make money', "If you stop at general math, you're only going to make general math money");

-- insert associations
INSERT INTO users_issues (user_id, issue_id, created_on) VALUES ('1', '4', '1995-1-3');
INSERT INTO users_issues (user_id, issue_id, created_on) VALUES ('2', '3', '1994-4-5');
INSERT INTO users_issues (user_id, issue_id, created_on) VALUES ('3', '2', '1995-3-4');
INSERT INTO users_issues (user_id, issue_id, created_on) VALUES ('4', '4', '1998-3-3');

