const express = require('express')
const products= require('./data/products')
const app = express()


app.get('/',(req, res) => {
    res.send('API is running...')
})
app.get('/api/products',(req, res) => {
    const product = products.find((p)=> p._id === req.params.id)
    res.json(product)
   })
   
app.get('/api/products/:id',(req, res) => {
    const product = products.find((p)=> p._id === req.params.id)
    res.json(product)
   })
app.get('/api/products/user',(req, res) => {
    const product = products.find((p)=> p._id === req.params.id)
    res.json(product)
   })


app.listen(5000, console.log('server running pn port 5000'))