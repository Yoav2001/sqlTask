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

const insertNewPost = async (email:string,textPost:string,timePost:string,urlPath:string) => {
  const client = await pool.connect();
  console.log(textPost+" "+"");
  
  const insertQuery:string = `INSERT INTO usersPosts (poster_email_user,text_post,time_post,url_path)
          VALUES ('${email}','${textPost}','${timePost}','${urlPath}')`;
   console.log( email+" from insert "+insertQuery);
    

    client.query(insertQuery)
    .catch((error)=>{
      throw error;
    })
}

export default {getAllPostFromDB,insertNewPost}