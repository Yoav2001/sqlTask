export type Comment = {
    idComment ?: number,
    commenterEmailUser: string,
    textComment: string 
    dateAndTimeComment: string
}

export type GetComment = (userId: Comment["idComment"]) => Promise<Comment | undefined>;
export type GetAllcommentsOfUserByEmail = (username: Comment["commenterEmailUser"])  => Promise<Comment[] | undefined>;
export type GetAllcomments = () => Promise<Comment[]>;
export type AddComment = (Comment: Comment) =>  Promise<string>;
export type DeleteUser = (userId: Comment["commenterEmailUser"]) => Promise<string>;
export type SetAdmin = (userId: Comment["commenterEmailUser"]) => Promise<Comment>;
