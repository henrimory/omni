
import React from 'react';
import api from './services/api';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  function hadleSubmit(){
      console.log("Hello World");
  }
  return (
    <div className="container">

        <img src={logo} alt="AirCnc" />

        <div className="content">
          <p>
            Ofereça <strong>spots </strong> para programadores e encontre<strong> talentos  </strong>para sua empresa
           
          </p>

          <form onSubmit={hadleSubmit}>
            <label htmlFor="email"> E-MAIL *</label>
            <input type="email" 
              id="email"
              placeholder="Seu melhor e-mail"
            />
            <button className="btn" type="submit">
              Entrar
            </button>
          </form>
        </div>

    </div>
  );
}

export default App;
