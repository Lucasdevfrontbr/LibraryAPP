import React from 'react';
import { useState, } from 'react';
import { useRouter } from 'next/router';

interface CreateProps {
  Render():void;
}

export default function Create({ Render }: CreateProps) {

    const [name, setname] = useState<string>('');
const [image_url, setimage_url] = useState<string>('');
const [author, setauthor] = useState<string>('');
const [year, setyear] = useState<number>(0);
const [description, setdescription] = useState<string>('');


const router = useRouter();

    async function CreateBook(name:string,image_url:string,author:string,year:number,description:string) {
        const response = await fetch('http://localhost:8000/create', {
          method: 'POST',
          body: JSON.stringify({ name,image_url, author,year,description }),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        console.log(data);
        if(Render){
        Render();
        }
       
      } 
      async function handleSubmit(event:any) {
        event.preventDefault()
        if( name && image_url  && author && year && description){

         CreateBook( name,image_url, author,year,description);
         setname('')
        setimage_url('')
        router.push('/');
        }else{
          alert('preencha os campos por favor !')
        }
        
      }
  
  return (
    <>
   <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
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

      <label htmlFor="author">autor:</label>
      <input
        type="text"
        id="author"
        value={author}
        onChange={event => setauthor(event.target.value)} 
      />
      <br />
      
      <label htmlFor="year">ano:</label>
      <input
        type="number"
        id="year"
        value={year}
        onChange={event => setyear(parseInt(event.target.value))} 
      />
      <label htmlFor="description">descrição:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={event => setdescription(event.target.value)} 
      />
      <button type="submit">Adicionar livro</button>
    </form>
    </>
  );
}
