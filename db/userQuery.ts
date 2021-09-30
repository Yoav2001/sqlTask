import {Client, Pool} from 'pg'
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'y2o0a0v1',
    port: 5432,
});


client.connect();


const insertQuery = `
INSERT INTO t_user (email,pass,fullname,gender)
VALUES ('nuni@gmail.com','nuni21','nuni elkana',2)
`;
  const insertUser = (email:string,password:string,userName:string,gender:number)=> {
    try{
      const res =  client.query(insertQuery)
    } 

    catch (error) {
      throw error;
     }


  }

 const getUserByEmail=(email:string)=> {
    const selectByEmail = `SELECT * FROM t_user WHERE email ='${email}'`
    try{
      const res =  client.query(selectByEmail)
    } 

    catch (error) {
      throw error;
    }
}

function getAllUsers(){

  const sqlAllUsers= `SELECT * FROM t_user`
  try{
    const res =  client.query(sqlAllUsers)
  } 

  catch (error) {
    throw error;
  }
}   
  export default {insertUser,getUserByEmail,getAllUsers}