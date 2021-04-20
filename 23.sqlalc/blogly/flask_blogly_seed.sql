-- from the terminal run:
-- psql < flask_blogly_seed.sql

DROP DATABASE IF EXISTS blogly_test_db;

CREATE DATABASE blogly_test_db;

\c blogly_test_db

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    image_url TEXT DEFAULT ''
);

INSERT INTO users
(first_name,last_name)
VALUES
('Jake','Larsen'),
('Molly','Larsen'),
('Bob','Larsen');
