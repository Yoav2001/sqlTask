
import type postModel = require("../models/postModel")
import postDb from '../db/postQuery'


export const getAllPosts :postModel.GetAllPost = async () => {
    
    try{
        return await postDb.getAllPost();
 
     }
     catch(error)
     {
        console.log('Database ' + error)
    }
}

function addNewPost(){


}
 

function getPostData(){
sadasd


}


function getPostsOfUser(){

}

function updateTextOfPost(){


}


export default {getAllPosts,addNewPost,getPostData,getPostsOfUser,updateTextOfPost}