import express from 'express';
import { Router } from 'express'
import postService from '../service/postService';
import { Post } from '../models/postModel';
const router = Router()


router.route("/")
    .get(async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        
        const data = await postService.getAllPosts();
        
        res.json(data);
    }) .post( (req:express.Request, res:express.Response, next:express.NextFunction) => {
        const posterUser:string = <string>req.body.posterEmail;
        const timePoster=getDateAndTimeNow();
        const textPost:string = <string>req.body.textPost;
        const urlPath:string =<string>req.body.urlPath;
        // const post={posterEmailUser:posterEmailUser,dateAndTimePoster:dateAndTimePoster,textPost:textPost,urlPath:urlPath}
        const p:Post={posterEmailUser:posterUser,dateAndTimePoster:timePoster,textPost:textPost,urlPath:urlPath}
        postService.addNewPost(p);        

    });


    
function getDateAndTimeNow(){
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;
    return dateTime;

}
export default router