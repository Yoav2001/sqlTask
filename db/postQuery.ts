import { Post } from '../models/postModel';

import pool from './connectionDb'

export async function getAllPostFromDB ():Promise<Post[]> {
  const client = await pool.connect();

    const sqlAllPosts= `SELECT * FROM usersPosts`
  
    try {
      const { rows } = await client.query(sqlAllPosts)
     
      console.log(JSON.stringify(rows))
      return rows;
    } catch (error) {
      throw error      
    }
    
  }

const insertNewPost = async (post:Post) => {
  const client = await pool.connect();
  
  const insertQuery:string = `INSERT INTO usersPosts (poster_email_user,text_post,time_post,url_path)
          VALUES ('${post.posterEmailUser}','${post.textPost}','${post.dateAndTimePoster}','${post.urlPath}')`;
   console.log( insertQuery);
    

    client.query(insertQuery)
    .catch((error)=>{
      throw error;
    })
}


 async function getAllPostUserByEmail (email : string ):Promise<Post[]> {
  const client = await pool.connect();

    const sqlAllPostsOfUser= `SELECT * FROM usersPosts WHERE poster_email_user = '${email}' `
  console.log(sqlAllPostsOfUser);
  
    try {
      const { rows } = await client.query(sqlAllPostsOfUser)
     
      console.log(JSON.stringify(rows))
      return rows;
    } catch (error) {
      throw error      
    }
    
  }


  // async function deletePost (email : string ,timePost):Promise<Post[]> {
  //   const client = await pool.connect();
  
  //     const sqlAllPostsOfUser= `SELECT * FROM usersPosts WHERE email = '${email}' `
    
  //     try {
  //       const { rows } = await client.query(sqlAllPostsOfUser)
       
  //       console.log(JSON.stringify(rows))
  //       return rows;
  //     } catch (error) {
  //       throw error      
  //     }
      
  //   }
export default {getAllPostFromDB,insertNewPost,getAllPostUserByEmail}