import React from 'react';
import { useState, useContext } from 'react';



type Props={
    id:string;
    CurrentName:string;
    CurrentDescription:string;
    CurrentAuthor:string;
    CurrentUrl:string;
    CurrentYear:number;
   Render:any;
}


const Edit : React.FC<Props>=({Render,id, CurrentName, CurrentDescription, CurrentAuthor, CurrentUrl, CurrentYear, } ) => {
    const [name, setname] = useState<string>(CurrentName);
    const [image_url, setimage_url] = useState<string>(CurrentUrl);
    const [author, setauthor] = useState<string>(CurrentAuthor);
    const [year, setyear] = useState<number>(CurrentYear);
    const [description, setdescription] = useState<string>(CurrentDescription);
   const [ModalIsOpen, setModalIsOpen]=useState<boolean>(false)

 

async function EditBook(Render:any,id:string,name:string,image_url:string,author:string,year:number,description:string){
await fetch(`http://localhost:8000/edit/${id}`,{
    method:'PUT',
    body:JSON.stringify({name, image_url, author,year,description}),
    headers:{'content-type': 'application/json'},
})
Render();
CloseModal()
}

    async function handleSubmit(event:any) {
        event.preventDefault()
         EditBook(Render,id,name,image_url, author,year,description);
      }

      function OpenModal(){
setModalIsOpen(true)
      }

      function CloseModal(){
        setModalIsOpen(false)
      }
      
  return (
   
    <div>
     <button onClick={OpenModal}>Editar</button>

     {ModalIsOpen &&( <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={event => setname(event.target.value)} 
       
      />
      <br />
      <label htmlFor="image_url">Imagem do livro(url):</label>
      <input
        type="text"
        id="image_url"
        value={image_url}
        onChange={event => setimage_url(event.target.value)} 
      />
      <br />

      <label htmlFor="author">author:</label>
      <input
        type="text"
        id="author"
        value={author}
        onChange={event => setauthor(event.target.value)} 
      />
      <br />
      
      <label htmlFor="year">year</label>
      <input
        type="number"
        id="year"
        value={year}
        onChange={event => setyear(parseInt(event.target.value))} 
      />
      <label htmlFor="description">description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={event => setdescription(event.target.value)} 
      />
      <button type="submit">Salvar</button>
      
    </form>)}
    </div>
  );
};

export default Edit;
