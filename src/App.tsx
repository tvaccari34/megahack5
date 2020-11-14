import React from 'react';
import './App.css';
import GlobalStyles from './styles/global';
import { Main } from './styles';
import Row from './components/Row/Row';

function App() {
  return (

    <>
    <GlobalStyles></GlobalStyles>
    <Main>
      <div className="App">
        <h2>Hello Orama - A new way to invest your money</h2>
        <Row title="Fundos que são a sua cara" fetchUrl='suggestion'/>
        <Row title="Ações que você pode se interessar" fetchUrl='profileFunds' />
        <Row title="Minhas seleções" fetchUrl='trends' />
      </div>
    </Main>
    </>

  );
}

export default App;
