SELECT * 
FROM owners 
FULL JOIN vehicles 
ON owners.id = vehicles.owner_id;

SELECT first_name,last_name,COUNT(owner_id) as count 
FROM owners 
FULL JOIN vehicles 
ON owners.id = vehicles.owner_id 
GROUP BY owners.id 
ORDER BY count, first_name ASC;

SELECT first_name, last_name, AVG(price) AS average_price, COUNT(owner_id) AS count
FROM owners
FULL JOIN vehicles
ON owners.id = vehicles.owner_id
GROUP BY owners.id
HAVING AVG(price) > 10000 AND COUNT(owner_id) > 1
ORDER BY AVG(price) DESC;