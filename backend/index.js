const app=require('express')()
const connection = require('./db');

const cors=require('cors')
app.use(cors())
const bodyParser = require("body-parser")
app.use(bodyParser.json())


app.get('/', (req, res) => {
    const sql = 'SELECT * FROM books';
    connection.query(sql, (error, results) => {
      if (error) throw error;
      res.json((results));
    });
  });

  app.post('/create',(req,res)=>{
    const sql='INSERT INTO books SET ?'
    const {description, image_url, year,author ,name} =req.body
    const values={description, image_url, year,author ,name}
    connection.query(sql,values,(error)=>{
      if (error) throw error;
      res.json({ message: 'Livro adicionado com sucesso!' });
    })
  })

  app.put('/edit/:id', (req,res)=>{
const { name, image_url, author, year, description } = req.body;
const {id}=req.params
const sql=`UPDATE books SET name = ?, image_url = ?, author = ?, year = ?, description = ? WHERE ID = ${id}`;
const values = [name, image_url, author, year, description];
connection.query(sql,values,(error)=>{
  if (error) throw error;
  res.json({message:'editado com sucesso'})
})
  })

 app.delete('/delete/:id',(req,res)=>{
  const {id}=req.params;
  const sql=`DELETE FROM books WHERE ID =${id}`;
  connection.query(sql,id,(error)=>{
    if (error) throw error;
    res.send({message:'excluido com sucesso'})
  })
 })

app.listen(3000)