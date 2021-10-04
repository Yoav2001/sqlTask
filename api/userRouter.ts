import express from 'express';
import userService from '../service/userService'
const router=express.Router();


router.route("/")
    .get(async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        
        const data = await userService.getAllUsers();
        console.log(data);
        
        res.json(data);
    })
    .post( (req, res, next) => {
        
        console.log("post user");
        
        const userName:string = <string>req.body.userName;
        const password:string = <string>req.body.password;
        const email:string = <string>req.body.email;
        const gender:number =<number>req.body.gender;
   
        const dataa=userService.addUser({email:email,password:password,fullName:userName,gender:gender})
        res.json(dataa);
    });



    router.route("/:email")
    
    .get(async (req, res, next) => {
        const email = <string>req.params.email;     
        console.log(email);
           
        const data = await userService.getUserDataWithEmail(email);
        res.json(data);
    })
    .delete(async (req, res, next) => {
        const email = <string>req.params.email;
        
        const data = await userService.deleteUserWithEmail(email);
        res.json(data);
    })
    






    export default router;
