-- DROP DATABASE
DROP DATABASE IF EXISTS simplyFit_db;

-- CREATE DATABASE
CREATE DATABASE simplyFit_db;

USE simplyFit_db;

-- creates tables
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    height INT,
    weight INT,
    PRIMARY KEY (id)
);

CREATE TABLE cardio (
    id INT NOT NULL AUTO_INCREMENT,
    day VARCHAR(30) NOT NULL, 
    exercise_name VARCHAR(30),
    distance DECIMAL,
    time DECIMAL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES user(id)
);

CREATE TABLE sleep (
    id INT NOT NULL AUTO_INCREMENT,
    day VARCHAR(30) NOT NULL,
    hours INT,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES user(id)
);

CREATE TABLE steps (
    id INT NOT NULL AUTO_INCREMENT,
    day VARCHAR(30) NOT NULL,
    amount INT,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES user(id)
);

CREATE TABLE water (
    id INT NOT NULL AUTO_INCREMENT,
    day VARCHAR(30) NOT NULL,
    amount INT,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES user(id)
);

CREATE TABLE workout (
    id INT NOT NULL AUTO_INCREMENT,
    day VARCHAR(30) NOT NULL,
    exercise_name VARCHAR(30),
    reps INT,
    sets INT,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES user(id)
);