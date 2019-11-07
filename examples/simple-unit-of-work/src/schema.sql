CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100),
    first_name VARCHAR(100),
    last_name VARCHAR(100)
);

CREATE TABLE products (
    product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    owner INT, 
    FOREIGN KEY(owner) REFERENCES users(user_id)
);

CREATE TABLE orders (
    order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    shipping_address VARCHAR(100),
    product_id INT,
    FOREIGN KEY(product_id) REFERENCES products(product_id)
);