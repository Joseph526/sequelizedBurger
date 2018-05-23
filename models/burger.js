module.exports = function(sequelize, Sequelize) {
    var Burger = sequelize.define("Burger", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        burger_name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        devoured: {
            type: Sequelize.BOOLEAN
        }
    });

    return Burger;
};
