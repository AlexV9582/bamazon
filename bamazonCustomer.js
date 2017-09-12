var mysql    = require("mysql");
var fs       = require("fs");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    order();
  });
});


function order() {
    inquirer
        .prompt([
        {
            "name" : "product",
            "type" : "input",
            "message" : "What product would you like to buy?"
        },
        {
            "name" : "units",
            "type" : "input",
            "message" : "How many units would you like to buy?"
        }
    ]).then(function(newOrder){
        var units = newOrder.units;
        var item = newOrder.product;
        var type;
        if (isNaN(parseInt(item))){
            type = "product_name"
        } else {
            type = "item_id"
        }
        checkQTY(type, item, units)
    })
}

function checkQTY(type, item, units) {
    var query = "SELECT item_id, product_name, price, stock_quantity FROM products WHERE ? AND stock_quantity >= ?";
    var query2 = connection.query(query, [{ [type] : item}, units], function(err, res) {
        if (err) throw err;
        if(res.length == 0) {
            console.log("Insufficient Quantity");
            order();
        } else {
            newQuantity = res[0].stock_quantity - units;
            total       = res[0].price * units
            if(units >= 0) {
                connection.query("UPDATE products SET stock_quantity = " + newQuantity + " WHERE " + type + ' = ' + '"' + item + '"') ;
                console.log("Your total is " + total);
                connection.end();
            } else {
                console.log("Please enter a positive value");
                order();
            }
        }
    })
}
