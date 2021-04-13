-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space


CREATE TABLE galaxies(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around TEXT NOT NULL
);
CREATE TABLE moons(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);
CREATE TABLE galaxy_planet_moon(
  id SERIAL PRIMARY KEY,
  gal_id INTEGER REFERENCES galaxies(id),
  plan_id INTEGER REFERENCES planets(id),
  moon_id INTEGER REFERENCES moons(id)
);

INSERT INTO planets
  (name, orbital_period_in_years, orbits_around)
VALUES
  ('Earth', 1.00, 'The Sun'),
  ('Mars', 1.88, 'The Sun'),
  ('Venus', 0.62, 'The Sun'),
  ('Neptune', 164.8, 'The Sun'),
  ('Proxima Centauri b', 0.03, 'Milky Way'),
  ('Gliese 876 b', 0.23, 'Gliese 876');

INSERT INTO galaxies
  (name)
VALUES
  ('Milky Way'),
  ('Milky Way'),
  ('Milky Way'),
  ('Milky Way'),
  ('Proxima Centauri'),
  ('Milky Way');

INSERT INTO moons
  (name)
VALUES
  ('The Moon'),
  ('Phobos'),
  ('Deimos'),
  ('Naiad'),
  ('Thalassa'),
  ('Despina'),
  ('Galatea'),
  ('Larissa');

INSERT INTO galaxy_planet_moon
  (gal_id, plan_id, moon_id)
VALUES
  (1,1,1),
  (1,2,2),
  (1,2,3),
  (1,3, NULL),
  (1,4,4),
  (1,4,5),
  (1,4,6),
  (1,4,7),
  (1,4,8),
  (2,5,NULL),
  (1,6,NULL);
  
