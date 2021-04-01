import React from 'react';

const BookItem = () => {
  const bookData = [
    { label: 'Jack London: Martin Eden', id: 1 },
    { label: 'James Joyce: Ulysses', id: 2 },
    { label: 'Charles Dickens: Oliver Twist', id: 3 },
  ];

  const book = bookData.map((item) => {
    return <li>{item.label}</li>;
  });

  return <ul>{book}</ul>;
};

export default BookItem;
