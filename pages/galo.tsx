import { NextPageContext } from 'next';
import React, { useEffect, useState } from 'react'

type GaloProps = {
    frase ?: string;
    autor ?: string;
}



export default function GaloPage(props: GaloProps) {

// state em react utiliza getter e setter
//get = obter
//set = definir
//const [frase, setFrase] = useState('')
  const [frase, setFrase] = useState(props.frase);
  const [autor, setAutor] = useState(props.autor);
  const [contador, setContador] = useState(0);

  //useEffect(funcao, array);
  useEffect(() => {
    //console.log('Executou o useEffect');
    if(contador == 0){
      document.title = "Carregou a página, executou a primeira vez";
    }else{
      document.title = "Carregou a página, executou a segunda vez";
    }    
  }, [frase, autor]);
  return (
    <div>
         <h1>{frase}</h1>
         {autor && <h2>{autor}</h2>}
         <button onClick={(e)=>{setFrase('teste');}}>Mudar a frase</button>
         <button onClick={(e)=>{setAutor('teste');}}>Mudar o autor</button>
         <button onClick={(e)=>{setContador(contador+1);}}>Contador+</button>
    </div>
  
   
  )
}


GaloPage.getInitialProps = async (ctx: NextPageContext) => {
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();
    const position = Math.floor(Math.random() * data.length);
    const frase = data[position].text;
    const autor = data[position].author;
    return {
        frase,
        autor
    }
}