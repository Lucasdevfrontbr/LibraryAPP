const mysql=require('mysql')
const pass = require('./pass');
const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
   password: pass,
   database: 'library',
})
connection.connect((error)=>{
if(error) throw error
    console.log('conexão feita com banco de dados')
})
module.exports = connection;