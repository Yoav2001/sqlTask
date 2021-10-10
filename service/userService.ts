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



export const addUser : usersModel.AddUser = async (userObj :usersModel.User) => {
    try{
        userDb.insertUser(userObj);
     }
     catch(error)
     {
        console.log('Database ' + error)
    }
    return await userDb.getUserByEmail(userObj.email)

}


export const getUserDataWithEmail: usersModel.GetUser = async (email?: string | undefined) => {
    if(email===undefined)
         return undefined;
    try{
        return await userDb.getUserByEmail(email)
    }
    catch(error)
    {
        throw error;
    }


    
}


export const deleteUserWithEmail: usersModel.DeleteUser = async (email?: string | undefined) => {
    if(email===undefined)
        return "the email is undefined cant delete";
        
    // if(userDb.getUserByEmail(email)===undefined)
    //     return "this email Not registered in the system"

    try{
         userDb.deleteUserByEmail(email)

    }   
    catch(error){
        throw error;
    }
    
    return "the user was deleted"
   


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





