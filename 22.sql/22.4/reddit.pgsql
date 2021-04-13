-- CREATE TABLE posts(
--     title TEXT,
--     username TEXT,
--     link TEXT
-- );

DROP DATABASE reddit_db;
CREATE DATABASE reddit_db;
\c reddit_db;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(15) UNIQUE,
    phone_number TEXT UNIQUE,
    password TEXT NOT NULL,
    account_balance FLOAT CHECK (account_balance > 0)
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    user_id INTEGER references users ON DELETE CASCADE,
    comment_text TEXT NOT NULL
);

CREATE TABLE subreddits(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    name VARCHAR(15) NOT NULL,
    description TEXT,
    subscribers INTEGER CHECK (subscribers > 0) DEFAULT 1,
    is_private BOOLEAN DEFAULT false
);


INSERT INTO users(username, password)
VALUES('graylady', 'asdada'),('steafgea', 'adwda');

INSERT INTO subreddits(name, user_id)
VALUES
('chickens', 2),
('waterlafwacwa', 1);

