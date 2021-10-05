import {Client, Pool} from 'pg'
import { json } from 'stream/consumers';
import { User } from '../models/userModel'

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'y2o0a0v1',
    port: 5432,
});


client.connect();

export async function getAllUsersFromDB ():Promise<User[] | undefined> {
  const sqlAllUsers= `SELECT * FROM users`

  try {
    const { rows } = await client.query(sqlAllUsers)
    console.log(JSON.stringify(rows))
    return rows;
  } catch (err) {
    console.log('Database ' + err)
  }
}
// export function getAllUsersFromDB(){


//   const sqlAllUsers= `SELECT * FROM users`
//   console.log(sqlAllUsers);
  
//   try{
//     const res =  client.query(sqlAllUsers)
//   } 

//   catch (error) {
//     throw error;
//   }
// } 


const insertUser = (email:string,password:string,userName:string,gender:number)=> {
  
    const insertQuery = `INSERT INTO users (email,pass,full_name,gender)
            VALUES ('${email}','${password}','${userName}','${gender}')`;
     console.log( email+" from insert "+insertQuery);

    try{
      const res =  client.query(insertQuery)
    } 

    catch (error) {
       throw error;
    }


}


//  const getUserByEmail=(email:string)=> {
//    let queryResult;
//     const selectByEmail = `SELECT * FROM users WHERE email ='${email}'`
//     try{
//       const res =  client.query(selectByEmail, function(err, result) {
//         if(err) { console.log(err); }
//         else { queryResult = result.rows[0] }
//     })
//     } 
//     catch (error) {
//       throw error;
//     }
//     return queryResult;

// }




//write select user with type and async and await
export async function getUserByEmail(email : string): Promise<User | undefined>{
  const selectByEmail = `SELECT * FROM users WHERE email = '${email}'`
  console.log(selectByEmail);
  // console.log(res);
  
  const res =   (await client.query(selectByEmail)).rows[0]

   

  // const res2 =   (await client.query(selectByEmail))
  
  console.log("res"+JSON.stringify(res));
  // console.log(res2);
  // console.log(JSON.stringify(res2));
  return res;
}
 



const deleteUserByEmail= async(email:string)=> {
  const deleteByEmail = `Delete FROM users WHERE email ='${email}'`
  try{
    await client.query(deleteByEmail)
  } 

  catch (error) {
    throw error;
  }
}

const updateUserNameByEmail=(email:string)=> {
  const updateByEmail = `update FROM users WHERE email ='${email}'`
  try{
    const res =  client.query(updateByEmail)
  } 

  catch (error) {
    throw error;
  }
}



  export default {insertUser,getUserByEmail,getAllUsersFromDB,deleteUserByEmail,updateUserNameByEmail}


  // const insertQuery = `
// INSERT INTO users (email,pass,fullname,gender)
// VALUES ('bar@gmail.com','bar21','bar giblik',2)
// `;
//   const insertUser = (email:string,password:string,userName:string,gender:number)=> {
//     try{
//       const res =  client.query(insertQuery)
//     } 

//     catch (error) {
//       throw error;
//      }


//   }



// import { Express } from 'express';
// import {Client, Pool} from 'pg'
// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: 'y2o0a0v1',
//     port: 5432,
// });


// client.connect();
// // const getUsers = (req:Express.Request, res:Express.Response) => {
// //   pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
// //     if (error) {
// //       throw error
// //     }
// //     res.status(200).json(results.rows)
// //   })

// //    const getUserById = (request, response) => {
// //     const pass = parseInt(request.params.id)
  
// //     client.query('SELECT * FROM t_users WHERE pass = $1', [pass], (error, results) => {
// //       if (error) {
// //         throw error
// //       }
// //       console.log(results.rows);
      
// //       response.status(200).json(results.rows)
// //     })
// //   }

// // const query='SELECT * FROM t_user'
// const insertQuery = `
// INSERT INTO t_user (email,pass,fullname,gender)
// VALUES ('nuni@gmail.com','nuni21','nuni elkana',2)
// `;
//   const insertUser = (userName:string,password:string,email:string,gender:number)=> {
//     try{
//       const res =  client.query(insertQuery)
//     } 

//     catch (error) {
//       throw error;
//      }


//   }

//   export default {insertUser}



