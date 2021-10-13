export type CommentVote = {
    commentId: number;
    voterEmail: string;
    isVoteUp: boolean;
  };
  export type AddCommentVoteResult =| "Added vote to comment" | "Failed to add vote";
  
  export type GetAllVotesBycommentId = (commentId: CommentVote["commentId"] ) => Promise<CommentVote[] | undefined>;
  export type GetAllVotes = () => Promise<CommentVote[]>;
  export type AddVoteToComment = (voteToPost: CommentVote ) => Promise<AddCommentVoteResult>;
  
  //יכול להוסיף
  export type howManyLike = (  poatId: CommentVote["commentId"] ) => Promise<number | undefined>