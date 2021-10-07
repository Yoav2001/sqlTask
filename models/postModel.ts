export type Post = {
    idPost ?: number,
    posterEmailUser: string,
    dateAndTimePoster: string,
    textPost: string,
    urlPath: string 
}


export type AddPostResult = "Added Post" | "Failed to add Post"
export type DeletePostResult = "delete Post" | "Faield to delete the Post"

export type GetPost = (userId: Post["idPost"]) => Promise<Post | undefined>;
export type GetAllPostsOfUserByEmail = (username: Post["posterEmailUser"])  => Promise<Post[] | undefined>;
export type GetAllPosts = () => Promise<Post[]>;
export type AddPost = (post: Post) =>  Promise<AddPostResult>;
export type DeleteUser = (userId: Post["posterEmailUser"]) => Promise<DeletePostResult>;
export type SetAdmin = (userId: Post["posterEmailUser"]) => Promise<Post>;
