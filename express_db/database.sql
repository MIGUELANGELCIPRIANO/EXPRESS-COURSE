CREATE DATABASE users;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(90)
);

INSERT INTO users (name) VALUES
	('Leanne Graham'),
	('Ervin Howell'),
	('Clementine Bauch'),
	('Patricia Lebsack'),
	('Chelsey Dietrich'),
	('Dennis Schulist'),
	('Kurtis Weissnat'),
	('Nicholas Runolfsdottir'),
	('Glenna Reichert'),
	('Clementina DuBuque');