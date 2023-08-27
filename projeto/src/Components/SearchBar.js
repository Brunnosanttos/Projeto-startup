import React, { useState } from 'react';
import './SearchBar.css'; 

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Pesquisando por:', searchQuery);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Digite seu hobby"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Pesquisar
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
