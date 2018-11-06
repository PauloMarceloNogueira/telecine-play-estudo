import React from 'react';
import './menu.sass'

// Components
import Button from '../Buttons/Buttons.jsx'

const Hamburguer = () => (
  <div>
    <input type="checkbox" id="menu-hamburguer"/>

    <label htmlFor="menu-hamburguer">
      <div className="menu-mobile">
        <span className="hamburguer"></span>
      </div>
    </label>
    <ul className="menu-content">
        <li className="menu-list-button">
          <ul>
            <li><Button value="Entrar" type="primary" /></li>
            <li><Button value="Assine" type="secondary" /></li>
          </ul>
        </li>
        <li>Lançamentos</li>
        <li>Playlists</li>
        <li>
          Gênero
          <ul>
            <li>Ação</li>
            <li>Animação</li>
            <li>Aventura</li>
            <li>Biografia</li>
            <li>Comédia</li>
            <li>Comédia Rom...</li>
            <li>Documentário</li>
            <li>Drama</li>
            <li>Ficção-científica</li>
            <li>Ação</li>
            <li>Animação</li>
            <li>Aventura</li>
            <li>Biografia</li>
            <li>Comédia</li>
            <li>Comédia Rom...</li>
            <li>Documentário</li>
            <li>Drama</li>
            <li>Ficção-científica</li>
          </ul>
        </li>
        <li>
          Na TV
          <ul>
            <li>No ar</li>
            <li>Programação</li>
          </ul>  
        </li>
          
      </ul>
  </div>
);

export default Hamburguer;