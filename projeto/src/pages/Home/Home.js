import React from 'react';
import './Home.css';
import Barrapesquisar from '../../Components/BarraPesquisar';
import Menu from '../../Components/Menu';

const Home = ({ hobbies }) => {
  return (
    <nav className="Container">
      <Menu/>
      <Barrapesquisar/>
      <h1>Hobbies</h1>
      <ul>
        {hobbies.map(hobby => (
          <li key={hobby.id}>
            <h3>{hobby.name}</h3>
            <div className="imagem-container">
              <div className={`imagem ${hobby.imagem}`}></div>
            </div>
            <p className="local"> Local: {hobby.local}-PE</p>
            <br></br>
            <p className="data">Data do evento: {hobby.data}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Home;