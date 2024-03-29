import React from 'react';
import { useState} from 'react';
import styled from "styled-components"

const Btn=styled.button`
width:3rem;
height:2rem;
color:white;
background:blue;
border:blue;
margin-left:1.5rem;
cursor: pointer;
border-radius:3px;
`

const Container = styled.div`
margin-top:0.5rem;
  width: 2.5rem; 
`;
const Form=styled.form`

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
background:white;
border:5px solid;
border-radius:10px;
height:18rem;
padding: 20px;
box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`
const SaveBtn=styled.button`
width:3rem;
height:2rem;
color:white;
background:blue;
border:blue;
border-radius:5px;
cursor: pointer;
`

const BtnContainer=styled.div`
display:flex;
justify-content:center;
margin-top:0.5rem;

`
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

 console.log(ModalIsOpen)

async function EditBook(Render:any,id:string,name:string,image_url:string,author:string,year:number,description:string){
await fetch(`https://backend-books-nomg.vercel.app/edit/${id}`,{
    method:'PUT',
    body:JSON.stringify({name, image_url, author,year,description}),
    headers:{'content-type': 'application/json'},
})
Render();
CloseModal()
}

    async function handleSubmit(event:any) {
        event.preventDefault()
        if(name && image_url  && author && year && description){
         EditBook(Render,id,name,image_url, author,year,description);
        }else{
alert("preencha todos os campos por favor !")
        }
      }

      function OpenModal(){
setModalIsOpen(true)
      }

      function CloseModal(){
        setModalIsOpen(false)
      }
      console.log('OpenModal')
  return (
   
    <Container>
      
 <Btn onClick={OpenModal}>Editar</Btn>
     

     {ModalIsOpen &&( <Form onSubmit={handleSubmit}>
      <label htmlFor="name"><strong>Nome</strong>:</label> <br />
      <input
        type="text"
        id="name"
        value={name}
        onChange={event => setname(event.target.value)} 
       
      />
      <br />
      <label htmlFor="image_url"><strong>Imagem do livro(url):</strong></label> <br />
      <input
        type="text"
        id="image_url"
        value={image_url}
        onChange={event => setimage_url(event.target.value)} 
      />
      <br />

      <label htmlFor="author"><strong>Autor:</strong></label> <br />
      <input
        type="text"
        id="author"
        value={author}
        onChange={event => setauthor(event.target.value)} 
      />
      <br />
      
      <label htmlFor="year"><strong>Ano</strong></label> <br />
      <input
        type="number"
        id="year"
        value={year}
        onChange={event => setyear(parseInt(event.target.value))} 
      /> <br />
      <label htmlFor="description"><strong>Descrição</strong>:</label> <br />
      <input
        type="text"
        id="description"
        value={description}
        onChange={event => setdescription(event.target.value)} 
      /> <br />
      <BtnContainer>
        <SaveBtn type="submit">Salvar</SaveBtn>
      </BtnContainer>
      
    </Form>)}
    </Container>
  );
};

export default Edit;
