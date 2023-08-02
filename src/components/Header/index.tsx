import React, { Link } from 'react-router-dom'
import './estilo.css'

const Header = () => {
    return ( 
        <header>
            <h2>Melhor Formatura de Engenharia de Software 2026</h2>
            <div className=''>
                <Link to={'/'}>Home</Link>
                <Link to={'/sobre'}>Sobre</Link>
                <Link to={'/contato'}>Contato</Link>
                <Link to={'/produto'}>Produto</Link>
            </div>
        </header>
        );
}
 
export default Header;