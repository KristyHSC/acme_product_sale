const router = require('express').Router()
const {Product} = require('./server/db')

router.get('/', (req, res, next) => {
    res.send('')
})


//get '/api/products'
router.get('/products', (req, res, next) => {
    Product.findAll()
        .then(products => res.json(products))
        .catch(next)
})


//post '/api/products'
router.post('/products', (req, res, next) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .then(() => console.log('success'))
        .catch(next)
})



module.exports = router