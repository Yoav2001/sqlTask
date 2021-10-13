import express from "express";
import { Router } from "express";
import commentVotesService from "../service/commentVotesService";

import { CommentVote } from "../models/commentVotesModel";
import { authed } from "../logic/auth";
const router = Router();

router
  .route("/")
  .get( async ( req: express.Request, res: express.Response, next: express.NextFunction) => {
     const data = await commentVotesService.getAllVotes();

      res.json(data);
    }
  )
  .post(async ( req: express.Request,  res: express.Response,next: express.NextFunction ) => {
      console.log("aa");

      const voterEmail: string = <string>req.body.voterEmail;
      const commentId: number = <number>req.body.commentId;
      const voteUp: boolean = <boolean>req.body.isVoteUp;
      const voteToComment: CommentVote = {
        commentId: commentId,
        voterEmail: voterEmail,
        isVoteUp: voteUp,
      };
      res.json(await commentVotesService.addNewVoteToComment(voteToComment));
    }
  );

// router
//  .route("/:commentId")

//   .get(async (req, res, next) => {
//     //אמור להיות מספר
//     const commentId: number = req.params.commentId;
//     console.log(commentId);

//     const data = await commentVotesService.getAllVotesOfComment(commentId);
//     console.log(data);
//     res.json({ key: data });
//   });



export default router
