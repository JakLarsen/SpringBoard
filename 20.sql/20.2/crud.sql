INSERT INTO products (name, price, can_be_returned) VALUES ('chair', 44.00, false);
INSERT INTO products (name, price, can_be_returned) VALUES ('stool', 25.99, true);
INSERT INTO products (name, price, can_be_returned) VALUES ('table', 124.00, false);
SELECT * FROM products;
SELECT name FROM products;
SELECT name, price FROM products;
INSERT INTO products (name, price, can_be_returned) VALUES ('robot', 4444.00, false);
SELECT * FROM products WHERE can_be_returned;
SELECT * FROM products WHERE price < 44.00;
SELECT * FROM products WHERE price BETWEEN 22.50 AND 99.99;
UPDATE products SET price = price - 20;
DELETE FROM products WHERE price < 25;
UPDATE products SET price = price + 20;
UPDATE products SET can_be_returned = true;






SELECT * FROM analytics WHERE id = 1880;
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01'; --had to update encoding--
SELECT category, COUNT(*) FROM analytics GROUP BY category;
SELECT app_name, reviews FROM analytics ORDER BY reviews DESC LIMIT 5;
SELECT app_name, reviews, rating FROM analytics WHERE rating >= 4.8 ORDER BY reviews DESC LIMIT 1;
SELECT category, AVG(rating) AS avg_rating FROM analytics GROUP BY category ORDER BY avg_rating DESC;
SELECT app_name, price, rating FROM analytics WHERE rating < 3 ORDER BY price DESC LIMIT 1;
SELECT app_name, min_installs, rating FROM analytics WHERE min_installs <= 50 AND rating > 0 ORDER BY rating DESC;
SELECT app_name, rating, reviews FROM analytics WHERE rating < 3 and reviews > 10000 ORDER BY rating DESC;
SELECT app_name, reviews, price FROM analytics WHERE price BETWEEN 0.1 AND 1 ORDER BY reviews DESC LIMIT 10;
SELECT app_name, last_updated FROM analytics ORDER BY last_updated ASC LIMIT 1;
SELECT app_name, price FROM analytics ORDER BY price DESC LIMIT 1;
SELECT SUM(reviews) AS reviews_count FROM analytics;
SELECT category, COUNT(*) FROM analytics GROUP BY category HAVING COUNT(*) > 300 ORDER BY COUNT(*) DESC;
SELECT app_name, min_installs, reviews, min_installs/reviews AS install_review_ratio FROM analytics WHERE min_installs > 100000 ORDER BY install_review_ratio DESC LIMIT 1;