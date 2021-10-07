import express from 'express';
import { User } from '../models/userModel';
import userService from '../service/userService'
const router=express.Router();
    import userDb from '../db/userQuery'
import { authed } from '../logic/auth';
import { authenticateAdmin } from '../logic/auth';

//2 הבקשות תקינות לגמרי פה
router.route("/")
    .get(async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        
         const data = await userService.getAllUsers();
        // const data2=userDb.getAllUserWithPool();
        // console.log(data2);
        
        // res.json(data2)
        res.json(data);
    })
    .post( (req, res, next) => {
        
        
        const userName:string = <string>req.body.userName;
        const password:string = <string>req.body.password;
        const email:string = <string>req.body.email;
        const gender:number =<number>req.body.gender;
        
        const data=userService.addUser({email:email,password:password,fullName:userName,gender:gender})
        res.json(data);
    });


//the Get and delete works here
 
    router.route("/:email")
    
    .get(async (req, res, next) => {
        const email:string = <string>req.params.email;     
           
        const data = await userService.getUserDataWithEmail(email);
        console.log(data)
        res.json({ key: data });
    })
    .delete(authed,authenticateAdmin,async (req, res, next) => {
        const email = <string>req.params.email;
        console.log(email);
        
        const data = await userService.deleteUserWithEmail(email);
        res.json(data);
    })
    

    export default router;
