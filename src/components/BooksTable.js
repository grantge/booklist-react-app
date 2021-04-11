import React from 'react';

import BookItem from './BookItem';

class BooksTable extends React.Component {
  render() {
    console.log(this.props);
    const book = this.props.data.map((item) => {
      const value = item;

      return (
        <li key={item.id} className="ui pink segment item">
          <BookItem
            {...value}
            deleteFunc={this.props.deleteFunc}
            addFunc={this.addBook}
          />
        </li>
      );
    });

    return <ul className="ui segment table-container">{book}</ul>;
  }
}

export default BooksTable;
