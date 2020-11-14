import React from 'react';
import './App.css';
import GlobalStyles from './styles/global';
import { Main } from './styles';
import Row from './components/Row/Row';
import logo from './assets/logo.png';

function App() {
  return (

    <>
      <GlobalStyles></GlobalStyles>
      <Main>
        <div className="App">
          <div className="app-header">
            <img src={logo} alt="Logo Twitter" />
            <div>
              <ul>
                <li>
                  Quero ir além
                </li>
                <li>
                  Porque a Órama?
                </li>
                <li>
                  SUA CONTA
                </li>
                <li>
                  ABRA A SUA CONTA
                </li>
              </ul>
            </div>
          </div>
          <Row title="Fundos que são a sua cara" fetchUrl='suggestion'/>
          <Row title="Ações que você pode se interessar" fetchUrl='profileFunds' />
          <Row title="Minhas seleções" fetchUrl='trends' />
        </div>
      </Main>
    </>

  );
}

export default App;
