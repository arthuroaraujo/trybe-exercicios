USE sakila;
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

USE sakila;
SELECT first_name FROM customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;

USE sakila;
SELECT title, description, release_year, rating, replacement_cost FROM film
WHERE replacement_cost > 18 AND rating <> 'NC-17'
ORDER BY replacement_cost DESC, title
LIMIT 100;

USE sakila;
SELECT COUNT(*) FROM customer
WHERE active = 1 AND store_id = 1;

USE sakila;
SELECT * FROM customer
WHERE active <> 1 AND store_id = 1;

USE sakila;
SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;

USE sakila;
SELECT * FROM film
WHERE title LIKE '%ACE%';

USE sakila;
SELECT * FROM film
WHERE description LIKE '%china';

USE sakila;
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%';

USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

USE sakila;
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

USE sakila;
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

USE sakila;
SELECT * FROM payment
WHERE payment_id IN (269, 239, 126, 399, 142);

USE sakila;
SELECT * FROM address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');

USE sakila;
SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'Texas');

USE sakila;
SELECT email FROM customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY email;

USE sakila;
SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';

USE sakila;
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

USE sakila;
SELECT title, rating FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;

USE sakila;
SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

USE sakila;
SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

USE sakila;
SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano ,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM rental
WHERE rental_id = 10330;

USE sakila;
SELECT * FROM payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;