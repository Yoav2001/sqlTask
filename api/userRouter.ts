import express, { Router } from 'express'
import userService from '../service/userService'
const app=express()
const router=express.Router()
import userDb from '../db/userQuery'
import dbQuery from '../dbQuery'


router.route("/")
    .get(async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        const email = <string | undefined> req.query.email;
        
        const data = await userService.getUserWithEmail(email);
        res.json(data);
    })
    .post(async (req, res, next) => {
        console.log("dasdad");
        
        const userName:string = <string>req.query.username;
        const password:string = <string>req.query.password;
        const email:string = <string>req.query.email;
        const gender:number =1;
        // const user={userName,password,email,gender}
        // const data = await userService.addUser(email,password,userName,gender);
        const dataa=dbQuery.insertUser(userName,password,email,gender)
        res.json(dataa);
    });



    router.route("/:email")
    .get(async (req, res, next) => {
        const email = <string>req.params.email;        
        const data = await userService.getUserWithEmail(email);
        res.json(data);
    })
    .delete(async (req, res, next) => {
        const email = <string>req.params.email;
        
        const data = await userService.deleteUserWithEmail(email);
        res.json(data);
    })







    



    export default router;
