const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const data = require(__dirname + '/src_besrv/server/addToCart/index.post.json')

app.get('/success', function (req, res) {
  res.header("Content-Type",'application/json');
  res.status(200) 
  res.send(JSON.stringify(data));
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`))

// create a GET route
app.get('/api', (req, res) => {

  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })


})
