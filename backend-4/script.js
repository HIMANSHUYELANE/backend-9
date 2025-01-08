const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log("home page loading")
    next()
  })

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use((req, res, next) => {
    console.log("mY page")
    next()
  })

app.get('/pro', function (req, res) {
    res.send('name is himanshu')
  })

  app.get('/intro', function (req, res) {
    res.send('I AM  Frontebd Developer')
  })

  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
  
app.listen(3000)