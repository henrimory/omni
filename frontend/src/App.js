
import React, { useState} from 'react';
import api from './services/api';
import './App.css';
import logo from './assets/logo.svg';
import axios from 'axios';

function App() {
  const  [email, setEmail] = useState('');




  async function hadleSubmit(event){
    event.preventDefault();
    
    const response = await api.post('/sessions', { email });
    
  }
  /*
  function handleEmailChange(event) {
    event => setEmail(event.target.value)
  }
  */
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
              type= "email"
              placeholder="Seu melhor e-mail"
              onChange={event => setEmail(event.target.value)} //hero function o mesmo que a função comentada acima handleEmailChnage
              value={email}
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
