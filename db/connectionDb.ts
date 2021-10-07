import pg from "pg";


const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'y2o0a0v1',
    port: 5432,
})  

// module.exports = () => { return pool; }

export default pool;