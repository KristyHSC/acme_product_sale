const db = require('./db')
const Product = require('./product')


module.exports = {
    db,
    Product
}

const syncAndSeed = () => {
    return db.sync({force:true})
        .then(() => {
            Product.create({
                name:'bike',
                price: 50,
                discount: 0,
                availability: 'available',
            })
        })
}

syncAndSeed();