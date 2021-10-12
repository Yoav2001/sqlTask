
import type postVotesModel = require("../models/postVotesModel")
import postVotesDb from '../db/postVotesQuery'


export const getAllVotes:postVotesModel.GetAllVotes = async () => {
    
    try{
        return await postVotesDb.getAllVotes()
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}


export const addNewVoteToPost: postVotesModel.AddVoteToPost = async (voteToPost :postVotesModel.PostVote) => {
    try{

        postVotesDb.insertNewVote(voteToPost)
       
     }
     catch(error)
     {
         throw error
        
        
    }
    const res :postVotesModel.AddPostResult="Added vote"
    return res;

}
//לבדוק איך יכול להוסיף אפשרות לחפש לפני שדה שהוא לא חובה
export const getAllVotesOfPost :postVotesModel.GetAllVotesByPostId = async (postId: number | undefined) => {
    
    
    try{
        return await postVotesDb.getAllVotesByPostId(postId);
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}



export default {getAllVotes,addNewVoteToPost,getAllVotesOfPost}