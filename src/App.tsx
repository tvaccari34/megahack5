import React from 'react';
import './App.css';
import Row from './components/Row/Row';

function App() {
  return (
    <div className="App">
      <h2>Hello Orama - A new way to invest your money</h2>
      <Row title="Fundos que sao a sua cara" fetchUrl='suggestion' />
      <Row title="Fundos de investimento com o seu perfil" fetchUrl='profileFunds' />
      <Row title="Fundos em alta" fetchUrl='trends' />
    </div>
  );
}

export default App;
