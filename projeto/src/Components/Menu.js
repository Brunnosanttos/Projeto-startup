import React from 'react';
import './Menu.css';
import '../pages/Login/Login'
import '../pages/Contato/Contato'
import '../pages/Cadastro/Cadastro'
import '../pages/QuemSomos/QuemSomos'
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menu-container">
      <ul className="menu">
        <li><Link to="/QuemSomos">Quem Somos</Link></li>
        <li><Link to="/Contato">Contato</Link></li>
        <li><Link to="Login">Login</Link></li>
        <li><Link to="Cadastro">Cadastre-se</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;