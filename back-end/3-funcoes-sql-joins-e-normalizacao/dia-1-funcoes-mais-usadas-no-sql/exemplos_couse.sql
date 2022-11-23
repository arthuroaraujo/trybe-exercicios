SELECT UCASE('trybe');
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
SELECT CHAR_LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

SELECT
    film_id,
    title,
    IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme?'
FROM sakila.film;

SELECT
    title,
    rating,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
		WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'público-alvo'
FROM sakila.film;

SELECT IF (15 MOD 2 = 0, 'Par', 'Ímpar')
AS 'Par ou Ímpar';

SELECT 220 DIV 12;
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));

SELECT ROUND(15 + (RAND() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494);
SELECT CEIL(85.234);

SELECT DATEDIFF('2030-01-20', NOW());
SELECT TIMEDIFF('10:25:45', '11:00:00');

SELECT AVG(length) AS 'Média de Duração',
	   MIN(length) AS 'Duração Mínima',
	   MAX(length) AS 'Duração Máxima',
       SUM(length) AS 'Tempo de Exibição Total',
       COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;

SELECT active, COUNT(*) as total 
FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*) as total 
FROM sakila.customer
GROUP BY store_id, active;

SELECT AVG(rental_duration), rating
FROM sakila.film
GROUP BY rating
ORDER BY rating DESC;

SELECT district, COUNT(*) AS quantidade
FROM sakila.address
GROUP BY district
ORDER BY quantidade DESC;

SELECT rating, AVG(length) AS Média
FROM sakila.film
GROUP BY rating
HAVING Média BETWEEN 115.0 AND 121.50
ORDER BY Média DESC;

SELECT rating, SUM(replacement_cost) AS custo_de_substituição
FROM sakila.film
GROUP by rating
HAVING custo_de_substituição > 3950.50
ORDER BY custo_de_substituição;