import React, { useState } from 'react';
import { toast} from 'react-toastify';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import css from './SearchForm.module.css'

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearch = e => {
    const querry = e.target.value;
  
    setSearch(querry);
  };

  const formSubmit = e => {
    e.preventDefault();
      if (search === '') {
      return toast.warning('Enter some movie name')}
    onSubmit(search);
  };

  return (
   <div className={css.Searchbar}>
     <form className={css.SearchForm} onSubmit={formSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}><BsSearch></BsSearch></span>
    </button>
  

    <input
      className={css.SearchFormInput}
      type="text"
      name="search"
      value={search}
      onChange={handleSearch}
      autoComplete="off"
      autoFocus
      placeholder="Search your favorite movie"
    />
  </form>
   </div>
  );
};

SearchForm.propTypes = {
 onSubmit: PropTypes.func.isRequired,
}

export default SearchForm;
