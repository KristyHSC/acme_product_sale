const Sequelize = require('sequelize')
const db = require('./db')

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        //allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        //allowNull: false
    },
    discount: {
        type: Sequelize.INTEGER
    },
    availability: {
        type: Sequelize.STRING,
        //allowNull: false 
    }

})

module.exports = Product;