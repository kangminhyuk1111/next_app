import mysql from 'mysql';

export default async function handler(req,res){
    const dbconnection = await mysql.createConnection({
        host : "localhost",
        database : "my_dev_web_study",
        user : "root",
        password : "1234"
    })
    try {
        const query = 'SELECT * FROM usedcar_db;'
        const value = [];
        const data = await dbconnection.execute(query,values);
        dbconnection.end();
    } catch (error) {
        res.status(500).json({ error : error.message })
    }
    res.status(200).json({ data : getdata })
}