const express = require('express')
const app = require('./src/app.js')
const mongoose = require('mongoose')

//environment variables module
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.port || 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to Local DATABASE (MongoDB compass Database)
// const DATABASE_URL = "mongodb://127.0.0.1:27017/test"

//Connect to Cloud DATABASE (MongoDB Atlas Database) 
const DATABASE_URL = process.env.MONGODB_URI

//connecting nodejs /expressJs to database with the help of mongoose 

mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
