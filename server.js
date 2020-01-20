const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')

app.get('/add-to-cart', (req, res) => {
  const addtocart = path.resolve(__dirname,'/src_besrv/server/addToCart/index.post.json')
  res.header('Content-Type','application/json')
  res.status(200)
  res.send(JSON.stringify(addtocart))
})
app.get('/banner-images', (req, res) => {
  const banner = path.resolve(__dirname, '/src_besrv/server/categories/index.get.json')
  res.header('Content-Type','application/json')
  res.status(200)
  res.send(JSON.stringify(banner))
})
app.get('/categories', (req, res) => {
  const categories = path.resolve(__dirname, '/src_besrv/server/categories/index.get.json')
  res.header('Content-Type','application/json')
  res.status(200)
  res.send(JSON.stringify(categories))
})
app.get('/products',(req, res) => {
  const products = path.resolve(__dirname, '/src_besrv/server/products/index.get.json')
  res.header('Content-Type','application/json')
  res.status(200)
  res.send(JSON.stringify(products))
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))

// create a GET route
app.get('/api', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})
