import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import BooksTable from './components/BooksTable';

import './index.css';

function App() {
  return (
    <div className="container">
      <Header />

      <div className="content-container">
        <div>
          <SearchBar />
          <Filter />
        </div>

        <div>
          <BooksTable />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
