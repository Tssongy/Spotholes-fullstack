CREATE DATABASE spotholes_db;
\c spotholes_db

CREATE TABLE potholes(
    id SERIAL PRIMARY KEY,
    lat FLOAT,
    lng FLOAT,
    location TEXT,
    size TEXT,
    photo TEXT,
    date DATE,
    username TEXT
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);

INSERT INTO potholes (lat, lng, location, size, photo, date, username)
VALUES (-33.87, 151.18, 'Darling Harbour', 'medium', 'no photo', '2022-01-22', 'anon');