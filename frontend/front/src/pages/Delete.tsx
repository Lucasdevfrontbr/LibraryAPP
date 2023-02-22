import React from 'react';

type Props={
    id:string;
    Render:any;
}

const Deletar = ({id,Render}: Props) => {
    async function DeleteBook(id:string) {
        await fetch(`http://localhost:8000/delete/${id}`, {
          method: 'DELETE',
        });
    Render()
      }
     
        return (
          <div>
          <button onClick={async()=> await DeleteBook(id)}>Excluir</button>
          </div>
        );
      };
    

export default Deletar;
