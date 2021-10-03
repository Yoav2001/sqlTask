import express, { Router } from 'express'
import path from 'path'
import routerApi from './api/router'
const app =express();
import userService from './service/userService'
// import db from './dbQuery'
// import router from './api/userRouter';
// const bodyParser = require('body-parser');
// const { response } = require('express');
// const filePath=path.join(__dirname);

app.use(express.json());
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    res.send("Hello world ")
     const data =  userService.addUser("barLilus@gmail.com","213","bar lilus",1)
    //  const data2 =  userService.getUserWithEmail("barLilus@gmail.com")
     console.log(data);
     
});
 
app.use("/api",routerApi)



const port = process.env.PORT||3000;
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

// app.get('/getAllUsers', db.getAllUsers)

// app.post('/users', db.addUser)