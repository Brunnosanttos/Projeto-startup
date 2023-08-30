import React from 'react';
import './Header.css';
import logoprojeto from '../midia/logoprojeto.jpg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoprojeto} alt="Logo" className="logo" />
      </div>
      <h1 className="project-name">Hobby Hub</h1>
      <h4>Conectando paixões</h4>
    </header>
  );
};

export default Header;
