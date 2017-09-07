DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products (
    item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(500) NOT NULL,
    department_name VARCHAR(20) NOT NULL,
    price DECIMAL(13, 2) NOT NULL,
    stock_quantity INTEGER(255),
	PRIMARY KEY (item_id)
);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES
    (1000054678, "Frozen Pizza", "Frozen", 5.99, 250),
    (1000098723, "Cheddar Cheese", "Dairy", 2.99, 25),
    (1000023487, "Frosted Flakes", "Grocery", 3.49, 15),
    (1000088876, "Hot Dogs", "Packaged Meat", 7.99, 25),
    (1000044432, "Romaine Lettuce", "Produce", 2.49, 48),
    (1000065543, "Shaving Cream", "HBC", 4.75, 5),
    (1000023768, "Canned Tuna", "Graocery", 0.99, 75),
    (1000010022, "2 Ltr Coke", "Beverage", 1.99, 140),
    (1000043251, "Grape Tomatoes", "Produce", 4.99, 48),
    (1000010034, "Dr. Pepper", "Beverage", 1.99, 75),
    (1000025463, "Bottled Water", "Grocery", 400.99, 0),
    (1000077563, "Butterfinger", "Candy", 1.00, 35);