import express from 'express';
import { Router } from 'express'
import postService from '../service/postService';
import { Post } from '../models/postModel';
import { authed } from '../logic/auth';
import postVotesApi from './postVotesRouter'

const router = Router()


router.route("/")
    .get(async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        
        const data = await postService.getAllPosts();
        
        res.json(data);
    }) .post( authed,async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        console.log("aa");
        
        const posterUser:string = <string>req.body.posterEmail;
        const timePoster=getDateAndTimeNow();
        const textPost:string = <string>req.body.textPost;
        const urlPath:string =<string>req.body.urlPath;
        const p:Post={posterEmailUser:posterUser,dateAndTimePoster:timePoster,textPost:textPost,urlPath:urlPath}
       res.json( await postService.addNewPost(p))          

    });

    router.route("/:email")
    
    .get(async (req, res, next) => {
        const email:string = <string>req.params.email;     
        console.log(email);
        
        const data = await postService.getAllPostsOfUser(email);
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