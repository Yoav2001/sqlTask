import { PostVote } from '../models/postVotesModel';

import pool from './connectionDb'

export async function getAllVotes ():Promise<PostVote[]> {
  const client = await pool.connect();

    const sqlAllPosts= `SELECT * FROM postVotes`
  
    try {
      const { rows } = await client.query(sqlAllPosts)
     
      console.log(JSON.stringify(rows))
      return rows;
    } catch (error) {
      throw error      
    }
    
  }



const insertNewVote = async (vote :PostVote) => {
  const client = await pool.connect();
  
  const insertQuery:string = `INSERT INTO postVotes (post_id,voter_email,vote_up)
          VALUES ('${vote.postId}','${vote.voterEmail}',${vote.isVoteUp})`;
          console.log(insertQuery);
          
   console.log(+insertQuery);
    

    client.query(insertQuery)
    .catch((error)=>{
      throw error;
    })
}


 async function getAllVotesByPostId (postId : number  |undefined):Promise<PostVote[] | undefined> {
  const client = await pool.connect();

    const sqlAllPostsOfUser= `SELECT * FROM postVotes WHERE post_id = '${postId}' `
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
export default {getAllVotes,insertNewVote,getAllVotesByPostId}