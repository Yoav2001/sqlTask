import express, { Router } from 'express'
import path from 'path'
import db from './dbQuery'
import routerApi from './api/router'
import router from './api/userRouter';
const app =express();
const bodyParser = require('body-parser');
const { response } = require('express');
const filePath=path.join(__dirname);

app.use(express.json());
app.get('/', function(req, res) {
    res.send("Hello world ")
});

app.use("/api",routerApi)

app.set('view engine', 'jade');
app.use(express.json());
// app.get('/getAllUsers', db.getAllUsers)

// app.post('/users', db.addUser)

const port = process.env.PORT||3000;
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
