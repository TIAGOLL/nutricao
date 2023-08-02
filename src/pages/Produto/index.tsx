import React from 'react';
import { Link } from 'react-router-dom';

const Produto = () => {
    return (
        <div>
            <h2>Página de detalhes de produto</h2>
            <Link to={'/'}>Home</Link>
            <Link to={'/sobre'}>Sobre</Link>
            <Link to={'/contato'}>Contato</Link>
            <Link to={'/produto'}>Produto</Link>
        </div>
    );
}

export default Produto;