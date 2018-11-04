import React from 'react';
import './menu.sass'
const Hamburguer = () => (
  <div>
    <input type="checkbox" id="menu-hamburguer"/>

    <label htmlFor="menu-hamburguer">
      <div className="menu-mobile">
        <span className="hamburguer"></span>
      </div>
    </label>
  </div>
);

export default Hamburguer;