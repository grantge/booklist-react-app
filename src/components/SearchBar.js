import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="ui small icon input search">
        <input type="text" placeholder="Search small..." />
        <i className="search icon"></i>
      </div>
      <button className="tiny ui black button">Search</button>
    </div>
  );
};

export default SearchBar;
