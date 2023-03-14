import React from 'react';
import { useState, } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Container=styled.div`
min-height:100vh;
display:flex;
flex-wrap:wrap;
flex-direction:column;
justify-content:center;

`
const Form=styled.form`
display:flex;
flex-direction:column;
height:40vh;
width:50vh;
align-self:center;

@media (max-width: 580px){
  width:80%;
}
`
const AddBtn=styled.button`
margin-top:0.5rem;
color: white;
background:green;
border:green;
border-radius:5px;
height:2.5rem;
cursor: pointer;
`
const BtnbackContainer=styled.div`
height:2.5rem;
display:flex;
justify-content:center;
`
const BtnBack=styled.div`
display:inline-flex;
justify-content:center;
align-items:center;
border-radius:5px;
cursor:pointer;
width:5rem;
background:blue;
color:white;
text-align:center;
`
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

function GetBack(){
  router.push('/')
}
    async function CreateBook(name:string,image_url:string,author:string,year:number,description:string) {
        const response = await fetch('https://backend-books-nomg.vercel.app/create', {
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
        router.push('/')
        }else{
          alert('preencha todos os campos por favor !')
        }
        
      }
      
  return (
    
    <Container>
   <Form onSubmit={handleSubmit}>
      <label htmlFor="name"><strong>Nome:</strong></label> 
      <input
        type="text"
        id="name"
        value={name}
        onChange={event => setname(event.target.value)} 
       
      />
      
      <label htmlFor="image_url"><strong>Imagem do livro(url):</strong></label> 
      <input
        type="text"
        id="image_url"
        value={image_url}
        onChange={event => setimage_url(event.target.value)} 
      />
      

      <label htmlFor="author"><strong>Autor:</strong></label> 
      <input
        type="text"
        id="author"
        value={author}
        onChange={event => setauthor(event.target.value)} 
      />
      
      
      <label htmlFor="year"><strong>Ano:</strong></label> 
      <input
        type="number"
        id="year"
        value={year}
        onChange={event => setyear(parseInt(event.target.value))} 
      />
      <label htmlFor="description"><strong>Descrição:</strong></label>  
      <input
        type="text"
        id="description"
        value={description}
        onChange={event => setdescription(event.target.value)} 
      /> 
      <AddBtn type="submit">Adicionar livro</AddBtn>
    </Form>
    <BtnbackContainer>
      <BtnBack onClick={GetBack}>Voltar</BtnBack>
      </BtnbackContainer>
    </Container>
  );
}
