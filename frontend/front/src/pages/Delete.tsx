import React from 'react';
import styled from 'styled-components';

const Btn=styled.button`
width:3rem;
height:2rem;
color:white;
background:red;
border:red;
cursor: pointer;
border-radius:3px;
`
const Container=styled.div`
margin-top:0.5rem;
width:4rem;
`
type Props={
    id:string;
   Render:any;
}


const Deletar = ({id,Render}: Props) => {
    async function DeleteBook(id:string) {
        await fetch(`https://backend-books-nomg.vercel.app/delete/${id}`, {
          method: 'DELETE',
        });
       
    Render()
      }
     
        return (
          <Container>
          <Btn onClick={async()=> await DeleteBook(id)}>Excluir</Btn>
          </Container>
        );
      };
    

export default Deletar;
