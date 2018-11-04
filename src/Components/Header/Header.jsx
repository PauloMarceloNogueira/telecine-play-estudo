import React from 'react';
import './header.sass';

import Menu from '../Menu/Menu.jsx';
import Hamburguer from '../Menu/HamburguerMenu.jsx'
import Search from '../Search/Search.jsx';

const Header = () => (
  <div>
    <div className="header">
      <div className="desktop">
        <div className="logo"></div>
      </div>
      <div className="desktop">
        <Menu />
      </div>
      <div className="mobile">
        <Hamburguer />
      </div>
      <Search />
    </div>
  </div>
)

export default Header