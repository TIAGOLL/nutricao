import React from 'react';
import { Link } from 'react-router-dom';

const Contato = () => {
    return (
        <div>
            <h1>Página de Contato</h1>
            <span>Contato (42) XXXXX-XXXXX</span>

            <Link to={'/'}>Home</Link>
            <Link to={'/sobre'}>Sobre</Link>
            <Link to={'/contato'}>Contato</Link>
            <Link to={'/produto'}>Produto</Link>
        </div>
    );
}

export default Contato;