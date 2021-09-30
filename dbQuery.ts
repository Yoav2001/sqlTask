import { Express } from 'express';
import {Client, Pool} from 'pg'
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'y2o0a0v1',
    port: 5432,
});


client.connect();
// const getUsers = (req:Express.Request, res:Express.Response) => {
//   pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     res.status(200).json(results.rows)
//   })

//    const getUserById = (request, response) => {
//     const pass = parseInt(request.params.id)
  
//     client.query('SELECT * FROM t_users WHERE pass = $1', [pass], (error, results) => {
//       if (error) {
//         throw error
//       }
//       console.log(results.rows);
      
//       response.status(200).json(results.rows)
//     })
//   }

// const query='SELECT * FROM t_user'
const insertQuery = `
INSERT INTO t_user (email,pass,fullname,gender)
VALUES ('nuni@gmail.com','nuni21','nuni elkana',2)
`;
  const insertUser = (userName:string,password:string,email:string,gender:number)=> {
    try{
      const res =  client.query(insertQuery)
    } 

    catch (error) {
      throw error;
     }


  }

  export default {insertUser}



