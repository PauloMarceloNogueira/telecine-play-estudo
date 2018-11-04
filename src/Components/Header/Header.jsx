import React from 'react';
import './header.sass';

import Menu from '../Menu/Menu.jsx';
import Search from '../Search/Search.jsx';

const Header = () => (
  <div>
    <div className="header">
      <div className="logo"></div>
      <Menu />
      <Search />
    </div>
  </div>
)

export default Header