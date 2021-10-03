import express, {Router} from 'express'
import userApi from './userRouter'
import commentApi from './commentRouter'
import postApi from './postRouter'
const app = express()
const router = Router()
router.route("/")
.get((req, res) => {
    res.json({
        echo: "The message is " 
    })
})

router.use("/user",userApi)
router.use("/comment",commentApi)
router.use("/post",postApi)

export default router
