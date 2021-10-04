import express, { Router } from 'express'
import path from 'path'
import routerApi from './api/router'
const app =express();
import userService from './service/userService'
import dotenv from 'dotenv';
dotenv.config()
app.use(express.json());
// app.use(express.urlencoded());
// var bodyParser = require('body-parser')
// app.use(bodyParser.json())

// app.use(bodyParser.urlencoded({ extended: true }))

// import db from './dbQuery'
// import router from './api/userRouter';
// const bodyParser = require('body-parser');
// const { response } = require('express');
// const filePath=path.join(__dirname);


app.get('/' ,function(req, res) {
     console.log(req.body);
  
    res.send("Hello world "+req.body.email)
    
    //  const data =  userService.addUser("barLilus@gmail.com","213","bar lilus",1)
    //  const data2 =  userService.getUserWithEmail("barLilus@gmail.com")
     
});


app.post('/' ,function(req, res) {
  console.log(req.body)
 res.send("Hello world "+req.body.email)
  
});
 
app.use("/api",routerApi)



const port = process.env.PORT||3000;
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

// app.get('/getAllUsers', db.getAllUsers)

// app.post('/users', db.addUser)