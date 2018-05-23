// var express = require("express");

// var router = express.Router();

// Import the model
var db = require("../models");

module.exports = function(app) {
    // Declare the routes
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(result) {
            var hbsObject = {
                burgers: result
            };
            res.render("index", hbsObject);
        });
    });

    app.post("/api/burgers", function(req, res) {
        db.Burger.create(req.body).then(function(result) {
                res.json({ id: result.insertId });
            });
    });

    app.put("/api/burgers/:id", function(req, res) {
        var condition = req.params.id;
        db.Burger.update({
            devoured: true
        }, 
        {
            where: {
                id: condition
            }
        }).then(function(result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            }
            else {
                res.status(200).end();
            }
        });
    });
};
