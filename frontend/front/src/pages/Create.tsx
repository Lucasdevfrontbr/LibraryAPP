import { useEffect, useState } from 'react'

type Props={
  Render:any;
}
export default function Create({Render}: Props) {

    const [name, setname] = useState<string>('');
const [image_url, setimage_url] = useState<string>('');
const [author, setauthor] = useState<string>('');
const [year, setyear] = useState<number>(0);
const [description, setdescription] = useState<string>('');

    async function createBook(name:string,image_url:string,author:string,year:number,description:string) {
        const response = await fetch('http://localhost:8000/create', {
          method: 'POST',
          body: JSON.stringify({ name,image_url, author,year,description }),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        console.log(data);
        Render()
      } 
      async function handleSubmit(event:any) {
        event.preventDefault()
        if( name && image_url  && author && year && description){

         createBook(name,image_url, author,year,description);
         setname('')
        setimage_url('')
      
        }else{
          alert('preencha os campos por favor !')
        }
        
      }
  
  return (
    <>
   <form onSubmit={handleSubmit}>
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
      <button type="submit">Criar usuário</button>
    </form>
    </>
  );
}
