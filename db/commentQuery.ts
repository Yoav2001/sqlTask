import { Comment } from '../models/commentModel';

import pool from './connectionDb'

export async function getAllCommentsFromDB ():Promise<Comment[]> {
  const client = await pool.connect();

    const sqlAllPosts= `SELECT * FROM usersComments`
  
    try {
      const { rows } = await client.query(sqlAllPosts)
     
      console.log(JSON.stringify(rows))
      return rows;
    } catch (error) {
      throw error      
    }
    
  }

const insertNewComment = async (c:Comment) => {
  const client = await pool.connect();
  
  const insertQuery:string = `INSERT INTO usersComments (commenter_email_user,post_id_of_comment,text_comment,time_comment)
          VALUES ('${c.commenterEmailUser}','${c.postIdOfComment}','${c.textComment}','${c.dateAndTimeComment}')`;
   console.log( " from insert "+insertQuery);
    

    client.query(insertQuery)
    .catch((error)=>{
      throw error;
    })
}


 async function getAllCommentsUserByEmail (email : string ):Promise<Comment[]> {
  const client = await pool.connect();

    const sqlAllPostsOfUser= `SELECT * FROM usersComments WHERE poster_email_user = '${email}' `
  console.log(sqlAllPostsOfUser);
  
    try {
      const { rows } = await client.query(sqlAllPostsOfUser)
     
      console.log(JSON.stringify(rows))
      return rows;
    } catch (error) {
      throw error      
    }
    
  }



  //   }
export default {getAllCommentsFromDB,insertNewComment,getAllCommentsUserByEmail}