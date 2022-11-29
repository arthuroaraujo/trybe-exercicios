USE sakila;

SELECT a.actor_id, CONCAT(a.first_name, a.last_name) AS name, fa.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON sakila.a.actor_id = sakila.fa.actor_id;

SELECT s.first_name, s.last_name, a.address
FROM staff as s
INNER JOIN address AS a
ON s.address_id = a.address_id;


SELECT
    c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM
    customer AS c
INNER JOIN
    address AS a 
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer AS c
INNER JOIN address AS a
ON a.address_id = c.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

SELECT c.first_name, c.last_name, COUNT(r.rental_id) AS `quantidade de filmes alugados`
FROM customer AS c
INNER JOIN rental AS r
ON c.customer_id = r.customer_id
WHERE c.active = 1
GROUP BY
    c.customer_id
ORDER BY c.first_name DESC, c.last_name DESC;

SELECT s.first_name, s.last_name, AVG(p.amount) AS `Média de pagamento`
FROM staff AS s
INNER JOIN payment AS p
ON s.staff_id = p.staff_id
WHERE
    YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;

SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM actor AS a
INNER JOIN film_actor as fa ON a.actor_id = fa.actor_id
INNER JOIN film as f ON f.film_id = fa.film_id;

SELECT
    CONCAT(employee.first_name, " ", employee.last_name) AS "Nome Pessoa Colaboradora",
    CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente"
FROM
    hr.employees AS employee
INNER JOIN
    hr.employees AS manager ON employee.manager_id = manager.employee_id
WHERE
    employee.department_id <> manager.department_id;
    
SELECT
	CONCAT(manager.first_name, " ", manager.last_name) AS "Nome Gerente",
    COUNT(*) AS `Quantidade de pessoas lideradas`
FROM 
	hr.employees AS manager
INNER JOIN
	hr.employees AS employee ON employee.manager_id = manager.employee_id
GROUP BY manager.employee_id;