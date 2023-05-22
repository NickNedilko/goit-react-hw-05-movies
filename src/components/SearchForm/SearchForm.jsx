import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSerch = e => {
    const querry = e.target.value;
    setSearch(querry);
  };

  const formSubmit = e => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form onSubmit={formSubmit}>
      <input type="text" onChange={handleSerch} value={search} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
