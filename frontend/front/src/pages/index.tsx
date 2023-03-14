import styled from "styled-components"

import { useEffect, useState } from 'react'
import Delete from './Delete'
import Edit from './Edit'
import Link from 'next/link';

const LinkContainer=styled.div`
display:flex;
margin-top:1rem;
margin-left:0.5rem;
height:4rem;
justify-content:center;
`

const LinkImg=styled(Link)`
width:10rem;
height:256px;
`

const StyledLink = styled(Link)`
  color: #eeeef8;
  background:green;
  padding:1rem;
  padding-top:1.3rem;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
border-radius:8px;
  border:2px solid;
  
`;

const Container=styled.div`
display:flex;
flex-direction:column;
margin-top:5rem;
margin-left:2rem;
width:18rem;
height:22rem;
justify-content:center;
align-items:center;
`

const Img=styled.img`
width:160px;
height:256px;
margin-bottom:0.5rem;
border-radius:3px;

`
const Btn=styled.div`
display:inline-flex;
align-self:flex-start;
justify-content:space-around;
width:17.4rem;
`
const Title=styled.span`
font-size:1.5em;
text-align:center;
`
const Book=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
margin-left:1rem;
margin-bottom:0.5rem;
@media (max-width: 1400px){
 margin-left:1.5rem;
}
@media (max-width: 1280px){
 margin-left:9rem;
}
@media (max-width: 1024px){
 margin-left:1.2rem;
}

@media (max-width: 974px){
 margin-left:9.5rem;
}

@media (max-width: 940px){
 margin-left:8rem;
}
@media (max-width: 906px){
 margin-left:7.5rem;
}
@media (max-width: 857px){
 margin-left:6.5rem;
}
@media (max-width: 820px){
 margin-left:5rem;
}
@media (max-width: 768px){
 margin-left:3.5rem;
}
@media (max-width: 684px){
 margin-left:11rem;
}
@media (max-width: 580px){
 margin-left:7.5rem;
}
@media (max-width: 555px){
 margin-left:7rem;
}
@media (max-width: 540px){
 margin-left:6.5rem;
}
@media (max-width: 500px){
 margin-left:5rem;
}
@media (max-width: 470px){
 margin-left:4rem;
}
@media (max-width: 430px){
 margin-left:3rem;
}
@media (max-width: 414px){
 margin-left:2.3rem;
}
@media (max-width: 400px){
 margin-left:2rem;
}
@media (max-width: 393px){
 margin-left:1.8rem;
}
@media (max-width: 390px){
 margin-left:1.5rem;
}
@media (max-width: 375px){
 margin-left:1.1rem;
}
@media (max-width: 360px){
 margin-left:0.7rem;
}
@media (max-width: 320px){
position:relative;
right:1.3rem;
}
`
const Author=styled.span`
text-align:center;
`
interface Book {
  description: string;
  name: string;
  year: number;
  author: string;
  image_url: string;
  ID:string;
}



export default function Home() {
 
  const [books, setBooks] = useState<Book[]>([]);
 
  async function Render() {
    const response = await fetch('https://backend-books-nomg.vercel.app/');
    const data = await response.json();
    setBooks(data as Book[]);
  }
  
  useEffect(() => {
    Render();
  }, []);


  
  

  return (
    
    
    <>

<LinkContainer>
  <StyledLink className='Create-Router' href='/Create' onClick={Render}>Adicionar novo livro</StyledLink>
</LinkContainer>

<Book>
  
          {books.map((book) => (
            <Container  key={book.ID}>
             <Title>{book.name}</Title>
             <Author>{book.author}</Author>
            <LinkImg href={`/Description?id=${book.ID}&name=${book.name}&author=${book.author}&year=${book.year}&image_url=${book.image_url}&description=${book.description}`}><Img src={book.image_url} alt={book.name} /></LinkImg>
             
             <Btn>
               <Edit Render={Render} id={book.ID} CurrentName={book.name} CurrentDescription={book.description} CurrentAuthor={book.author} CurrentUrl={book.image_url} CurrentYear={book.year} />
               <Delete id={book.ID} Render={Render}/>
             </Btn>
            </Container>

      
        ))}
   </Book>

    
    </>
  );
  
  
  
  
  
}

