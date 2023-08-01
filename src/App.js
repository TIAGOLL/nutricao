import React,{useEffect,useState} from 'react';
import './assets/estilo.css';

function App(){
  const [nutri,setNutri] = useState([]);
  
  useEffect(()=>{
    function carregarDados(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts&authuser=0';
      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setNutri(json);
      })
    }

    carregarDados();

  },[]);

  return(
    <div className='container'>
      <header>
        <strong>nutri</strong>
      </header>
      {nutri.map((item)=>{
        return(
          <article key={item.id} className='post'>
            <strong className='titulo'>item.titulo</strong>
            <img src={item.capa} alt={item.titulo}/>
            <p className='subtitulo'>{item.subtitulo}</p>
            <a className='botao' href='#'>Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App();


