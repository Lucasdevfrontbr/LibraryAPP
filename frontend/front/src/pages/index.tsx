import styled from "styled-components"
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Delete from './Delete'
import Edit from './Edit'
import Link from 'next/link';




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
    const response = await fetch('http://localhost:8000/');
    const data = await response.json();
    setBooks(data as Book[]);
  }
  
  useEffect(() => {
    Render();
  }, []);


  
  

  return (
    
    
    <>

<Link className='Create-Router' href='/Create' onClick={Render}>Criar novo livro</Link>


        {books.map((book) => (
          <div key={book.ID}>
            <span>{book.name}</span>
            <span>{book.description}</span>
            <img src={book.image_url} alt="" />
            <Edit Render={Render} id={book.ID} CurrentName={book.name} CurrentDescription={book.description} CurrentAuthor={book.author} CurrentUrl={book.image_url} CurrentYear={book.year} />
            <Delete id={book.ID} Render={Render}/>
          
          </div>
      
        ))}
   

    
    </>
  );
  
  
  
  
  
}

