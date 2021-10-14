
DROP DATABASE bankly;
CREATE DATABASE bankly;

DROP DATABASE bankly_test;
CREATE DATABASE bankly_test;


CREATE TABLE users (
    username text PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    phone text NOT NULL,
    password text NOT NULL,
    admin boolean DEFAULT false
);

INSERT INTO users (username, first_name, last_name, email, phone, password, admin)
VALUES ('admin', 'jake', 'larsen', 'email', 'phone', 'asd', 'true');
INSERT INTO users (username, first_name, last_name, email, phone, password, admin)
VALUES ('user1', 'pewpew', 'larsen', 'email', 'phone', 'asd', 'false');


