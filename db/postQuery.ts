
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'y2o0a0v1',
    port: 5432,
});
import { Post } from '../models/postModel';


client.connect();
export async function getAllPostFromDB ():Promise<Post[] | undefined> {
    const sqlAllUsers= `SELECT * FROM posts`
  
    try {
      const { rows } = await client.query(sqlAllUsers)
      console.log(JSON.stringify(rows))
      return rows;
    } catch (err) {
      console.log('Database ' + err)
    }
  }