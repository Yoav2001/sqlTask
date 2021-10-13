import type commentVotesModel = require("../models/commentVotesModel");
import commentVotesDb from "../db/commentVotesQuery";

export const getAllVotes: commentVotesModel.GetAllVotes = async () => {
  try {
    return await commentVotesDb.getAllVotes();
  } catch (error) {
    throw "Database " + error;
  }
};

export const addNewVoteToComment: commentVotesModel.AddVoteToComment = async (voteToPost: commentVotesModel.CommentVote) => {
  try {
    commentVotesDb.insertNewVote(voteToPost);
  } catch (error) {
    throw error;
  }
  const res: commentVotesModel.AddCommentVoteResult ="Added vote to comment"
  return res;
};
//לבדוק איך יכול להוסיף אפשרות לחפש לפני שדה שהוא לא חובה
export const getAllVotesOfComment: commentVotesModel.GetAllVotesBycommentId = async (
  postId: number | undefined
) => {
  try {
    return await commentVotesDb.getAllVotesByCommentId(postId);
  } catch (error) {
    throw "Database " + error;
  }
};

export default { getAllVotes, addNewVoteToComment, getAllVotesOfComment };