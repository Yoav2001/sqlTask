
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

export const addNewPost: postModel.AddPost = async (post:postModel.Post) => {
    try{
        postDb.insertNewPost(post); 
     }
     catch(error)
     {
         throw error
        
        
    }
    const res :postModel.AddPostResult="Added Post"
    return res;

}

export const getAllPostsOfUser :postModel.GetAllPostsOfUserByEmail = async (email:string) => {
    console.log("service");
    
    try{
        return await postDb.getAllPostUserByEmail(email);
 
     }
     catch(error)
     {
        throw 'Database ' + error
    }

}
function getPostData(){


}


function getPostsOfUser(){

}

function updateTextOfPost(){


}


export default {getAllPosts,addNewPost,getAllPostsOfUser,getPostData,updateTextOfPost}