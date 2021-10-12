import exp from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel'
const jwtSecret :string="bommer"

// type TokenStructure = {
//     username: string,
//     isAdmin: boolean,
//     iat: number
// }

//gets called only if authed is passed so the header must be checked for undefined already
export function getSignedUserType(req: exp.Request,res:exp.Response):User{
        if(req.headers["authorization"]){
            const bearerHeader: string = req.headers["authorization"];
        
            const bearer: string[] = bearerHeader.split(" ");
            const bearerToken: string = bearer[1];
            console.log(bearerToken);     
            console.log(typeof(jwt.decode(bearerToken)));
            console.log(jwt.decode(bearerToken));   
            return  <User>jwt.decode(bearerToken);

        //  return  jwt.decode(bearerToken)!.toString();

        }
         const defaultUser : User= {email  :'',password:"",userName:"2121",gender:1 };
         res.status(401);
         return defaultUser;


    }
   

export function authed(req: exp.Request, res: exp.Response, next: exp.NextFunction): void{
    console.log("asdsa");
    
    const bearerHeader: string | undefined = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined'){
        const bearer: string[] = bearerHeader.split(" ");
        const bearerToken: string = bearer[1];
        console.log(bearerToken);
        jwt.verify(bearerToken, jwtSecret, (err, data) => {
            if(err){
                console.log(err);
                res.status(401);
            }
            else{
                console.log("auth");   
                next();
            }
        });
    }
    else{
        res.sendStatus(401);
    }
}

export function authenticateAdmin(req:exp.Request, res:exp.Response, next:exp.NextFunction) {
    // const authHeader = req.headers['authorization']; //= Bearer TOKEN

    // const token =authHeader!.split(' ')[1] //the token is the second parameter in the arr
    
    // const jwtVer=jwt.verify(token,jwtSecret,(err,value)=>{
    //     console.log(value)
    // })
    const userObj : User= <User> getSignedUserType(req,res)
    // const userName = decodedToken.payload.name;
    if (userObj.userName === "admin")
        next() //move on from the middleWare 
    else {
        // next(new ApiError(403, 'this user dont have Permissions'))
        res.status(403).json('this user dont have Permissions');
    }
}


