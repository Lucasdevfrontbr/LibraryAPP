const mysql=require('mysql')
const {DB_HOST, DB_NAME,DB_PASSWORD,DB_USER} = require('./config')
const connection=mysql.createConnection({
    host: DB_HOST,
    user:DB_USER,
   password: DB_PASSWORD,
   database: DB_NAME,
   port:DB_PORT
})
connection.connect((error)=>{
if(error) throw error
    console.log('conexão feita com banco de dados')
})
module.exports = connection;