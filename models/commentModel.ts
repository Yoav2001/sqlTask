export type Comment = {
    idComment ?: number,
    commenterEmailUser: string,
    postIdOfComment:number,
    textComment: string 
    dateAndTimeComment: string
}

export type AddCommentResult = "Added Comment Succeeded" | "Failed to add Post"
export type GetAllcommentsOfUserByEmail = (email: Comment["commenterEmailUser"])  => Promise<Comment[] | undefined>;
export type GetAllcomments = () => Promise<Comment[]>;
export type AddComment = (Comment: Comment) =>  Promise<string>;
//מה שפה למטה לא עשיתי שימוש בנתיים
export type GetComment = (userId: Comment["idComment"]) => Promise<Comment | undefined>;
export type DeleteUser = (userId: Comment["commenterEmailUser"]) => Promise<string>;
export type SetAdmin = (userId: Comment["commenterEmailUser"]) => Promise<Comment>;


