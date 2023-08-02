import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/index.tsx'
import Sobre from './pages/Sobre/index.tsx'
import Contato from './pages/Contato/index.tsx'
import Erro from './pages/Erro/index.tsx'
import Header from './components/Header/index.tsx'
import Produto from './pages/Produto/index.tsx'


function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path={"/contato"} element={<Contato />} />
                <Route path="/produto" element={<Produto />} />
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;