export type User = {
    email: string,
    password: string,
    userName: string,
    gender: number
}


export type GetUser = (userId: User["email"]) =>Promise<User | undefined>;
export type GetUserViaUsername = (username: User["userName"]) => Promise<User>;
export type GetAllUsers = () => Promise<User[]>;
export type AddUser = ({email, password, name,gender}: any) =>  Promise<User | undefined>;
export type DeleteUser = (userId: User["email"]) => Promise<string>;
export type SetAdmin = (userId: User["email"]) => Promise<User>;



async function check(): Promise<number>{
    const x : number =1;
    return x;

}