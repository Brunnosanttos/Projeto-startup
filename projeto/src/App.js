import React, { useState } from 'react';
import './App.css';
import Lista from './Components/Lista';
import Header from './Components/Header';

function App() {
  const [hobbies, setHobbies] = useState([
    { id: 1, name: 'Pedalada', local: 'Abreu e Lima', data: "15/06/1999", imagem: "imagem1"},
    { id: 2, name: 'Socializar', local: "Ibura, Recife", data: "07/09/2001", imagem: "imagem2"},
    { id: 3, name: 'Caçar tatu na praia', local: "Itamaracá", data: "04/07/2025", imagem: "imagem3"},
    { id: 4, name: 'Caçar tatu na praia', local: "Itamaracá", data: "04/07/2025", imagem: "imagem4"},
    { id: 5, name: 'Caçar tatu na praia', local: "Itamaracá", data: "04/07/2025", imagem: "imagem5"},
    { id: 6, name: 'Caçar tatu na praia', local: "Itamaracá", data: "04/07/2025", imagem: "imagem6"},
    { id: 7, name: 'Caçar tatu na praia', local: "Itamaracá", data: "04/07/2025", imagem: "imagem7"},
  ]);

  return (
    <div className="Container">
      <Header/>
      <Lista hobbies={hobbies}/>
    </div>
  );
}

export default App;