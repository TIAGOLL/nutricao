import React from 'react';
import { Link } from 'react-router-dom';


const Sobre = () => {
    return (
        <div>
            <h1>Página sobre a empresa</h1>
            <Link to={'/'}>Home</Link>
            <Link to={'/sobre'}>Sobre</Link>
            <Link to={'/contato'}>Contato</Link>
            <Link to={'/produto'}>Produto</Link>
        </div>
    );
}

export default Sobre;