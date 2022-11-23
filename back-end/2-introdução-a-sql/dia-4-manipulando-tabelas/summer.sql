USE sakila;
SELECT first_name, last_name FROM actor;

SELECT * FROM actor;

SELECT * FROM film
ORDER BY film_id DESC
LIMIT 5;

SELECT 40 + 60 AS PRIMEIRA, 'summer' AS SEGUNDA, 'complica' AS TERCEIRA;

SELECT payment_date FROM payment
WHERE DATE(payment_date) = '2005-06-15';

SELECT payment_date FROM payment
WHERE HOUR(payment_date);

SELECT payment_id, amount FROM payment
WHERE amount IN (10.99, 5.99, 2.99);