import React from 'react';

import BookItem from './BookItem';

class BooksTable extends React.Component {
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
  };

  deleteBook = (id) => {
    const newArrList = this.state.bookData.filter((book) => {
      return book.id !== id;
    });
    this.setState({
      bookData: newArrList,
    });
  };

  render() {
    const book = this.state.bookData.map((item) => {
      const value = item;

      return (
        <li key={item.id} className="ui pink segment item">
          <BookItem {...value} deleteFunc={this.deleteBook} />
        </li>
      );
    });

    return <ul className="ui segment table-container">{book}</ul>;
  }
}

export default BooksTable;
