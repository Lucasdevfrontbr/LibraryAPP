import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Container=styled.div`
display:flex;
flex-direction:column;
min-height:100vh;
justify-content:center;
`
const ImgContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
height:18rem;
`
const Img=styled.img`
width:160px;
height:256px;
margin-bottom:0.5rem;
`
const Btn=styled.button`
margin-top:0.5rem;
width:4rem;
height:3rem;
align-self:center;
cursor: pointer;
background:blue;
border:blue;
color:white;
border-radius:3px;
`
const Title=styled.span`
font-size:1.5em;
text-align:center;
`
const Details=styled.span`
margin-top:0.5rem;
text-align:center;
`
const Year=styled.span`
margin-top:0.5rem;
text-align:center;
`
interface Book {
    id: string;
    name: string;
    author: string;
    year: number;
    image_url: string;
    description:string;
  }

function Description() {
    const router=useRouter()
    const { id, name, author, year, image_url, description } = router.query;
    const book = { id: id as string, name: name as string, author: author as string, year: parseInt(year as string), image_url: image_url as string, description:description as string };
    
    function GetBack(){
      router.push('/');
    }
    
  return (
    <Container>
        <ImgContainer>
            <Img src={book.image_url} alt={book.name} />
                <Title>{book.name}</Title>
        </ImgContainer>
    <Details>{book.description}</Details>
    <Year>{book.year}</Year>
    
    <Btn onClick={GetBack} >Voltar</Btn>
    </Container>
  );
}

export default Description;
