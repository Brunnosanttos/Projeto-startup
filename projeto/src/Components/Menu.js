import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu-container">
      <ul className="menu">
        <li><a href="#">Quem Somos</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Cadastre-se</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
