import React from 'react';
import './Menu.css';
import '../pages/Login/Login'
import '../pages/Contato/Contato'
import '../pages/Cadastro/Cadastro'
import '../pages/QuemSomos/QuemSomos'

const Menu = () => {
  return (
    <nav className="menu-container">
      <ul className="menu">
        <li><a href="../pages/QuemSomos/QuemSomos">Quem Somos</a></li>
        <li><a href="../pages/Contato/Contato">Contato</a></li>
        <li><a href="../pages/Login/Login">Login</a></li>
        <li><a href="../pages/Cadastro/Cadastro">Cadastre-se</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
