const express = require('express')
const app = express()
const mongoose =require('mongoose')
const env = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')

env.config()

app.listen(8080,()=>{
    console.log('server is running on 8080')
})