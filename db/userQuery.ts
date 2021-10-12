import {Client, Pool} from 'pg'
import { json } from 'stream/consumers';
import { User } from '../models/userModel'
import pool from './connectionDb'


export async function getAllUsersFromDB ():Promise<User[] | undefined> {
  const client = await pool.connect();
  const sqlAllUsers= `SELECT * FROM users`

  try {
    const { rows } = await client.query(sqlAllUsers)
    client.release();//משחרר את 
    return rows;
  } catch (err) {
    console.log('Database ' + err)
  }
}



 const insertUser = async(userObj : User)=> {
  const client = await pool.connect();

    const insertQuery = `INSERT INTO users (email,pass,full_name,gender)
            VALUES ('${userObj.email}','${userObj.password}','${userObj.userName}','${userObj.gender}')`;

    try{
      const res =  client.query(insertQuery)
    } 

    catch (error) {
       throw error;
    }


}






//write select user with type and async and await
export async function getUserByEmail(email : string): Promise<User | undefined>{
  const client = await pool.connect();
  const selectByEmail = `SELECT * FROM users WHERE email = '${email}'`
  const res =   (await client.query(selectByEmail)).rows[0]
  return res;
}
 



const deleteUserByEmail= async(email:string)=> {
  const client = await pool.connect();

  const deleteByEmail = `Delete FROM users WHERE email ='${email}'`
  try{
    await client.query(deleteByEmail)
  } 

  catch (error) {
    throw error;
  }
}

const updateUserNameByEmail=async(email:string)=> {
  const client = await pool.connect();

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



