const mysql=require('mysql')

const connection=mysql.createConnection({
    host: 'localhost',
    user:'root',
   password: 'UdY4PTxt7)!Yn+S(',
   database: 'library',
})
connection.connect((error)=>{
if(error) throw error
    console.log('conexão feita com banco de dados')
})
module.exports = connection;