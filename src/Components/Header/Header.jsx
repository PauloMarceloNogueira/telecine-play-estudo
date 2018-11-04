import React from 'react';
import './header.sass';

import Menu from '../Menu/Menu.jsx';

const Header = () => (
  <div>
    <div className="header">
      <div className="logo"></div>
      <Menu />
    </div>
  </div>
)

export default Header