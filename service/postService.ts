
import type postModel = require("../models/postModel")
import postDb from '../db/postQuery'


export const getAllPosts :postModel.GetAllPosts = async () => {
    
    try{
        return await postDb.getAllPostFromDB();
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}

export const addNewPost: postModel.AddPost = async ({posterEmailUser, dateAndTimePoster, textPost,urlPath }) => {
    try{
     postDb.insertNewPost(posterEmailUser,textPost,dateAndTimePoster,urlPath);
       
     }
     catch(error)
     {
         throw error
        
    }
    const res :postModel.AddPostResult="Added Post"
    return res;

}

function getPostData(){


}


function getPostsOfUser(){

}

function updateTextOfPost(){


}


export default {getAllPosts,addNewPost,getPostData,getPostsOfUser,updateTextOfPost}