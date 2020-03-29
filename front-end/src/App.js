import React from 'react';

import './global.css';

import Routes from './routes';
//sempre quando importar uma pasta ele procura primeiro o arquivo index por isso não é necessario colocar a baixo
//import Logon from './pages/Logon';
//jsx JavaScript XML, quando um HTML está integrado com o JavaScript

//Live Reload: quando o navegador atualizar sem precisar fechar
function App() {
  return (
    <Routes />
  );
}

export default App;
