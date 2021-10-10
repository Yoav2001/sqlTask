import express from 'express';
import { Router } from 'express'
import commentService from '../service/commentService'
import { Comment } from '../models/commentModel';
const router = Router()


router.route("/")
    .get(async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        
        const data = await commentService.getAllComments();
        
        res.json(data);
    }) .post( (req:express.Request, res:express.Response, next:express.NextFunction) => {
        const emailUser:string = <string>req.body.commenterEmail;
        const postIdOfComment :number=req.body.postIdOfComment
        const timePoster=getDateAndTimeNow();
        const textComment:string = <string>req.body.textComment;
        const c:Comment={commenterEmailUser:emailUser,postIdOfComment:postIdOfComment,dateAndTimeComment:timePoster,textComment:textComment}
       res.json(commentService.addNewComment(c))          

    });

    router.route("/:email")
    
    .get(async (req, res, next) => {
        const email:string = <string>req.params.email;     
        console.log(email);
        
        const data = await commentService.getAllCommentsOfUser(email);
        console.log(data)
        res.json({ key: data });
    })
    
function getDateAndTimeNow(){
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;
    return dateTime;

}
export default router

