import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import { Cadastro } from './Pages/Cadastro/index';
import { Filmes } from './Pages/Filmes/index';
import { Generos } from './Pages/Generos/index';
import { Home } from './Pages/Home/index';

 


   const root = ReactDOM.createRoot(
      document.getElementById('root') 
    );

const Rotas = () => {

   return(
      <BrowserRouter>

      <Routes>

         <Route element = {<Home />} path = '/'/>
         <Route element = {<Cadastro/>} path = '/Cadastro'/>
         <Route element = {<Filmes/>} path = '/filmes'/>
         <Route element = {<Generos/>} path = '/generos'/>

      </Routes>

      </BrowserRouter>
   );
}

root.render(
<React.StrictMode>
   <Rotas/> 
</React.StrictMode>
);

