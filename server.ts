import express, { Router } from 'express'
import path from 'path'
import routerApi from './api/router'
const app =express();
import userService from './service/userService'
import dotenv from 'dotenv';
import { authed } from './logic/auth.js';

dotenv.config()
app.use(express.json());
app.use("/api",routerApi)


const port = process.env.PORT||3000;
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

// app.get('/getAllUsers', db.getAllUsers)

// app.post('/users', db.addUser)




// app.use(express.urlencoded());
// var bodyParser = require('body-parser')
// app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({ extended: true }))

// import db from './dbQuery'
// import router from './api/userRouter';
// const bodyParser = require('body-parser');
// const { response } = require('express');
// const filePath=path.join(__dirname);
