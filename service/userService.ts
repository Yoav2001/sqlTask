import userDb from '../db/userQuery'
import db = require("../db/userQuery");

import type usersModel = require("../models/userModel")
function getAllUsers (){
    console.log("service");
    
    try{
       return userDb.getAllUsersFromDB();

    }
    catch(error)
    {
        throw error;
    }

}


export const addUser : usersModel.AddUser = async ({email, password, fullName,gender}) => {
    console.log(email);
    
    await userDb.insertUser(email,password,fullName,gender);
    return userDb.getUserByEmail(email)
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

export const getUser: usersModel.GetUser = async (email) => {

    const user = await userDb.getUserByEmail(email)
    return user;
}
function getUserDataWithEmail (email?: string | undefined) {
    
    if(email !== undefined) return userDb.getUserByEmail(email);
    return -1;
} 


function deleteUserWithEmail(email?: string | undefined){
    try{
        if(email !== undefined) return userDb.deleteUserByEmail(email)
    }
    catch(error){
        throw error

    }

}
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





