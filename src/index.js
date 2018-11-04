import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass'
// Components
import Header from './Components/Header/Header.jsx';
import Carousel from './Components/Carousel/Carousel.jsx'

ReactDOM.render(
  <div>
    <Header />
    <Carousel />
  </div>
, document.getElementById('index'));