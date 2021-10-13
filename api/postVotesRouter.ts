import express from 'express';
import { Router } from 'express'
import postVotesService from '../service/postVotesService'
import postVotesApi from './postVotesRouter'
import { PostVote } from '../models/postVotesModel'
import { authed } from '../logic/auth';
const router = Router()


router.route("/")
    .get(async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        console.log("all");
        
        const data = await postVotesService.getAllVotes();
        
        res.json(data);
    }) .post( async (req:express.Request, res:express.Response, next:express.NextFunction) => {
        console.log("aa");
        
        const voterEmail:string = <string>req.body.voterEmail;
        const postId:number = <number>req.body.postId;
        const voteUp:boolean =<boolean>req.body.isVoteUp;
        const voteToPost:PostVote={postId:postId,voterEmail:voterEmail,isVoteUp:voteUp}
       res.json( await postVotesService.addNewVoteToPost(voteToPost))          

    });

    // router.route("/:postId")
    
    // .get(async (req, res, next) => {
    //     //אמור להיות מספר
    //     const postId:number  = req.params.postId ;     
    //     console.log(postId);

    //     const data = await postVotesService.getAllVotesOfPost(postId);
    //     console.log(data)
    //     res.json({ key: data });
    // })

    export default router