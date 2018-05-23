// var express = require("express");

// var router = express.Router();

// Import the model
var db = require("../models");

module.exports = function(app) {
    // Declare the routes
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(data) {
            var hbsObject = {
                burgers: data
            };
            res.render("index", hbsObject);
        });
    });

    app.post("/api/burgers", function(req, res) {
        burger.insertOne([
            "burger_name", "devoured"
        ], [
                req.body.burger_name, req.body.devoured
            ], function(result) {
                res.json({ id: result.insertId });
            });
    });

    app.put("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;
        burger.updateOne({
            devoured: true
        }, condition, function(result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
    });
};
