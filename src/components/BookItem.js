import React from 'react';

const BookItem = () => {
  const bookData = [
    {
      author: 'Jack London',
      book: 'Martin Eden',
      id: 1,
    },
    { author: 'James Joyce', book: 'Ulysses', id: 2 },
    { author: 'Charles Dickens', book: 'Oliver Twist', id: 3 },
  ];

  const book = bookData.map((item) => {
    return (
      <li key={item.id} className="ui pink segment item">
        <p>
          {item.author} : {item.book}
        </p>

        <div className="images">
          <button className="btn btn-first">
            <i className="bookmark icon"></i>
          </button>

          <button className="btn btn-second">
            <i className="book icon"></i>
          </button>

          <button className="btn btn-third">
            <i className="trash alternate outline icon"></i>
          </button>
        </div>
      </li>
    );
  });

  return <ul>{book}</ul>;
};

export default BookItem;
