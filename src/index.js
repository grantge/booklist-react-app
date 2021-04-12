import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddBar from './components/AddBar';
import Filter from './components/Filter';
import BooksTable from './components/BooksTable';

import './index.css';

class App extends React.Component {
  state = {
    bookData: [
      {
        id: 1,
        author: 'Jack London',
        book: 'Martin Eden',
      },
      {
        id: 2,
        author: 'James Joyce',
        book: 'Ulysses',
      },
      {
        id: 3,
        author: 'Charles Dickens',
        book: 'Oliver Twist',
      },
    ],
    filterAuthor: '',
  };

  addBook = (author, book) => {
    const newBook = {
      id: this.state.bookData.length + 1,
      author,
      book,
    };

    const newArr = [...this.state.bookData, newBook];

    this.setState({
      bookData: newArr,
    });
  };

  deleteBook = (id) => {
    const newArrList = this.state.bookData.filter((book) => {
      return book.id !== id;
    });
    this.setState({
      bookData: newArrList,
    });
  };

  search(array, fil) {
    if (fil.length === 0) {
      return array;
    }
    return array.filter((item) => {
      return (
        item.author.toLowerCase().indexOf(fil.toLowerCase()) > -1 ||
        item.book.toLowerCase().indexOf(fil.toLowerCase()) > -1
      );
    });
  }

  searchAuthor = (filterAuthor) => {
    this.setState({
      filterAuthor: filterAuthor,
    });
  };

  render() {
    const visible = this.search(this.state.bookData, this.state.filterAuthor);

    console.log(visible);
    return (
      <div className="container">
        <Header />

        <div className="content-container">
          <div className="bar-container">
            <SearchBar searchAuthor={this.searchAuthor} />

            <AddBar addFunc={this.addBook} />
          </div>

          <div className="item-container">
            <Filter />
            <BooksTable deleteFunc={this.deleteBook} data={visible} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
