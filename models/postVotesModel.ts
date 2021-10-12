export type PostVote = {
    postId ?: number,
    voterEmail: string,
   isVoteUp:boolean

}
export type AddPostResult = "Added vote" | "Failed to add vote"

export type GetAllVotesByPostId = (postId: PostVote["postId"])  => Promise<PostVote[] | undefined>;
export type GetAllVotes = () => Promise<PostVote[]>;
export type AddVoteToPost = (voteToPost: PostVote) =>  Promise<AddPostResult>;

//יכול להוסיף
export type howManyLike = (poatId: PostVote["postId"]) => Promise<number | undefined>;
