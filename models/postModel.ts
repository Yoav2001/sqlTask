export type Post = {
    idPost: number,
    posterEmailUser: string,
    dateAndTimePoster: string,
    textPost: string,
    urlPath: string 
}


export type getPost = (userId: Post["idPost"]) =>Promise<Post | undefined>;
export type GetAllPostOfUserByEmail = (username: Post["posterEmailUser"])  => Promise<Post[] | undefined>;
export type GetAllPost = () => Promise<Post[] | undefined>;
export type AddPost = ({idPost,posterEmailUser,dateAndTimePoster,textPost,urlPath}: any) =>  Promise<Post | undefined>;
export type DeleteUser = (userId: Post["posterEmailUser"]) => Promise<string>;
export type SetAdmin = (userId: Post["posterEmailUser"]) => Promise<Post>;
