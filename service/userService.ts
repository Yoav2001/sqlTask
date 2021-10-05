import userDb from '../db/userQuery'
import type usersModel = require("../models/userModel")



export const getAllUsers : usersModel.GetAllUsers = async () => {
    
    try{
        return await userDb.getAllUsersFromDB();
 
     }
     catch(error)
     {
        console.log('Database ' + error)
    }
}



export const addUser : usersModel.AddUser = async ({email, password, fullName,gender}) => {
    try{
        userDb.insertUser(email,password,fullName,gender);
     }
     catch(error)
     {
        console.log('Database ' + error)
    }
    return await userDb.getUserByEmail(email)

}



// function addUser(email: string, password: string, name: string, gender:number){
//     try{
//         userDb.insertUser(email,password,name,gender)
//         return "the user insert to DB"
//     }

//     catch(error){
//         throw error;
//     }
// }

export const getUserDataWithEmail: usersModel.GetUser = async (email?: string | undefined) => {
    if(email===undefined)
         return undefined;
    try{
        const user = await userDb.getUserByEmail(email)
        console.log( "service "+JSON.stringify(user));
        
    }
    catch(error)
    {
        throw error;
    }

    
}
// function getUserDataWithEmail (email?: string | undefined) {
    
//     if(email !== undefined) return userDb.getUserByEmail(email);
//     return -1;
// } 


export const deleteUserWithEmail: usersModel.DeleteUser = async (email?: string | undefined) => {
    if(email===undefined)
         return "the email is undefined cant delete";

    try{
         userDb.deleteUserByEmail(email)

    }   
    catch(error){
        throw error;
    }
    if(userDb.getUserByEmail(email)===undefined)
        return "user deleted"

    return  "there was problem with delete the user"

}

// function deleteUserWithEmail(email?: string | undefined){
//     try{
//         if(email !== undefined) return userDb.deleteUserByEmail(email)
//     }
//     catch(error){
//         throw error

//     }

// }
function updateUserNameWithEmail(email?: string | undefined){
    if(email !== undefined)  userDb.updateUserNameByEmail(email);

} 




export default {addUser, getUserDataWithEmail,deleteUserWithEmail,updateUserNameWithEmail,getAllUsers};

// const addUser =async (email:string,password:string,name:string,gender:number)=>{
//     try{
//         await  userDb.insertUser(email,password,name,gender)
//         return "table create succ"
//     }

//     catch(error){
//         throw error;
//     }

// }




// export const getUserWithEmail = async (email?: string | undefined) => {
//     if(email !== undefined) return await getUserByEmail(email);
//     return await getAllUsers();
// }





