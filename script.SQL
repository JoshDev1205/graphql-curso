CREATE TABLE users
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR,
  lastname VARCHAR,
  email VARCHAR UNIQUE NOT NULL
)

CREATE TABLE authors
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR,
  country VARCHAR,
  register_by INTEGER,
  FOREIGN KEY (register_by) REFERENCES users (id)
)

CREATE TABLE books
(
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR,
  description VARCHAR,
  quantity INTEGER,
  price INTEGER,
  writted_by INTEGER,
  register_by INTEGER,
  FOREIGN KEY (writted_by) REFERENCES authors (id),
  FOREIGN KEY (register_by) REFERENCES users (id)
)

ALTER TABLE users ADD COLUMN password VARCHAR