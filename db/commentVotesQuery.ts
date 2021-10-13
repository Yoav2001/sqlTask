import { CommentVote } from "../models/commentVotesModel";

import pool from "./connectionDb";

export async function getAllVotes(): Promise<CommentVote[]> {
  const client = await pool.connect();

  const sqlAll = `SELECT * FROM commentVotes`;

  try {
    const { rows } = await client.query(sqlAll);

    console.log(JSON.stringify(rows));
    return rows;
  } catch (error) {
    throw error;
  }
}

const insertNewVote = async (vote: CommentVote) => {
  const client = await pool.connect();

  const insertQuery: string = `INSERT INTO CommentVotes (comment_id,voter_email,vote_up)
          VALUES ('${vote.commentId}','${vote.voterEmail}',${vote.isVoteUp})`;
  console.log(+insertQuery);

  client.query(insertQuery).catch((error) => {
    throw error;
  });
};

async function getAllVotesByCommentId(commentId: number | undefined): Promise<CommentVote[] | undefined> {
  const client = await pool.connect();

  const sqlAllCommentVoteByCommentId = `SELECT * FROM CommentVotes WHERE comment_id = '${commentId}' `;

  try {
    const { rows } = await client.query(sqlAllCommentVoteByCommentId);

    console.log(JSON.stringify(rows));
    return rows;
  } catch (error) {
    throw error;
  }
}

//   }
export default { getAllVotes, insertNewVote, getAllVotesByCommentId };