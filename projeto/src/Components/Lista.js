import React from 'react';
import './Lista.css';
import Menu from './Menu';

const Lista = ({ hobbies }) => {
  return (
    <nav className="Container">
      <Menu/>
      <h1>Próximos Hobbies</h1>
      <ul>
        {hobbies.map(hobby => (
          <li key={hobby.id}>
            <h3>{hobby.name}</h3>
            <div className={`imagem ${hobby.imagem}`}></div>
            <p className="local"> Local: {hobby.local}-PE</p>
            <br></br>
            <p className="data">Data do evento: {hobby.data}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Lista;