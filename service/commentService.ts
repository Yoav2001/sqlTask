
import type commentModel = require("../models/commentModel")
import commentDb from '../db/commentQuery'


export const getAllComments :commentModel.GetAllcomments = async () => {
    
    try{
        return await commentDb.getAllCommentsFromDB();
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}
export type Comment = {
    idComment ?: number,
    commenterEmailUser: string,
    textComment: string 
    dateAndTimeComment: string
}

export const addNewComment: commentModel.AddComment = async (c : commentModel.Comment) => {
    try{

     commentDb.insertNewComment(c);
       
     }
     catch(error)
     {
         throw error
        
        
    }
    const res :commentModel.AddCommentResult="Added Comment Succeeded"
    return res;

}

export const getAllCommentsOfUser :commentModel.GetAllcommentsOfUserByEmail = async (email:string) => {
    console.log("service");
    
    try{
        return await commentDb.getAllCommentsUserByEmail(email);
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}
// function getPostData(){


// }


// function getPostsOfUser(){

// }

// function updateTextOfPost(){


// }


export default {getAllComments,addNewComment,getAllCommentsOfUser}