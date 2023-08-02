import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Bem-vindo(a) a página Home</h1>
            <span>Tiago Emanuel de Lima</span>
            <br />
            <br />
            <Link to='/sobre' >Sobre</Link>
            <Link to='/contato' >Contato</Link>
            <Link to='/produto' >Produto</Link>
        </div>
    );
}

export default Home;