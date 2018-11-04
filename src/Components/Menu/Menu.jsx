import React from 'react';
import './menu.sass';

const Menu = () => (
  <ul className="menu-container">
    <li className="menu-item">minha lista</li>
    <li className="menu-item">lançamentos</li>
    <li className="menu-item">
      playlists
      <svg class="svg-icon" width="14" height="9" viewBox="0 0 14 9">
        <path fill="currentColor" stroke="currentStroke" d="M1 2 7 8 13 2 12 1 7 6 2 1"></path>
      </svg>
      <ul className="menu-item-playlist">
        <div className="menu-item-playlist-content">
          <li>
            Kids 
          </li>
          <li>Top 100 filmes</li>
          <li>Invasão Marvel</li>
          <li>Star Wars</li>
          <li>O melhor do cult</li>
          <li>disney</li>
          <li>para não assistir sozinho</li>
          <li>filmes nacionais</li>
          <li>ver todos</li>
        </div>
        
      </ul>
    </li>
    <li className="menu-item">gêneros
      <svg class="svg-icon" width="14" height="9" viewBox="0 0 14 9">
        <path fill="currentColor" stroke="currentStroke" d="M1 2 7 8 13 2 12 1 7 6 2 1"></path>
      </svg>
      <ul className="menu-item-generos">
        <div className="menu-item-playlist-content">
          <li>Ação</li>
          <li>Animação</li>
          <li>Aventura</li>
          <li>Biografia</li>
          <li>Comédia</li>
          <li>Comédia Romantica</li>
          <li>Documentário</li>
          <li>Drama</li>
          <li>Ficção-científica</li>
        </div>
      </ul>
    </li>
    <li className="menu-item">na tv</li>
  </ul>
)

export default Menu