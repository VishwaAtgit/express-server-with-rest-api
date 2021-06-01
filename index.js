import express from 'express'
import bodyParser from 'body-parser'

import userRoutes from './routes/users.js'

const app = express()
const PORT = 3000

app.use(bodyParser.json());

app.use('/users', userRoutes)


//first route
app.get('/', (req, res) => {
    res.send('hello from ./ route')
})

app.listen(PORT, () => {
    console.log('server is listening to port 3000')
})

// reference video
//https://www.youtube.com/watch?v=l8WPWK9mS5M



// classical approach
// var express = require('express');
// var http = require('http');

// var port = 3000;

// var app = express();

// // set first request
// app.get('/', (req, res) => {
//     res.send('Hello Node');
// });

// var server = http.createServer(app)
// server.listen(port, () => {
//     console.log('server running')
// })

