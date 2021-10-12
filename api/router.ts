import express, {Router} from 'express'
import userApi from './userRouter'
import commentApi from './commentRouter'
import postApi from './postRouter'
import { User } from '../models/userModel'
import jwt from 'jsonwebtoken';

const app = express()
const router = Router()
const jwtSecret :string="bommer"
router.route("/login")
    .post((req:express.Request, res:express.Response, next) => {
        // Authenticate User
         const user={userEmail:req.body.email,password:req.body.password}
         console.log(user.password);
         
        const token = jwt.sign(user, jwtSecret)
        
        
        if(token===undefined||token===null)
           res.status(403).json('this user dont have Permissions');

        res.json(JSON.stringify(token))

       
    })

router.use("/user",userApi)
router.use("/comment",commentApi)
router.use("/post",postApi)

export default router
