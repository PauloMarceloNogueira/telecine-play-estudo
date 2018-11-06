import React from 'react';
import './buttons.sass'

const Button = (props) => (
  <button type="button" className={props.type}>{props.value}</button>
)

export default Button;