import userDb from '../db/userQuery'
function addUser(email:string,password:string,name:string,gender:number){
    try{
          userDb.insertUser(email,password,name,gender)
        return "table create succ"
    }

    catch(error){
        throw error;
    }
}


function getUserWithEmail (email?: string | undefined) {
    if(email !== undefined) return getUserByEmail(email);
    return  getAllUsers();
} 


function deleteUserWithEmail(email?: string | undefined){


}




export default {addUser, getUserWithEmail,deleteUserWithEmail};

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





