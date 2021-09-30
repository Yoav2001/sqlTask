import express, { Router } from 'express'
import userApi from './userRouter'
import commentApi from './commentRouter'
import postApi from './postRouter'
const app=express()
const router=express.Router()
router.route("/")
.get(async (req, res, next) => {
    console.log("dasdad");
})

app.use("./user",userApi)
app.use("./comment",commentApi)
app.use("./user",postApi)

export default app

