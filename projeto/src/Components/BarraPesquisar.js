import React, { useState } from 'react';
import './BarraPesquisar.css';

const BarraPesquisar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div className="search-bar-container">
    <div
      className={`search-bar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <input type="text" placeholder="Pesquisar" />
      <button>Buscar</button>
    </div>
    </div>
  );
};

export default BarraPesquisar;
