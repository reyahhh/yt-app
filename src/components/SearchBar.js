import React, { useState } from 'react'

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    onTermSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form"  onSubmit={onSubmit}>
        <label htmlFor="search-input">Search Video</label>
        <input
          id="search-input"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar