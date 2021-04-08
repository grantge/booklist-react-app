import React from 'react';

class BookItem extends React.Component {
  state = {
    finish: false,
    process: false,
  };

  inProcessBook = () => {
    this.setState((state) => {
      return {
        process: !state.process,
      };
    });
  };

  finishBook = () => {
    this.setState((state) => {
      return {
        finish: !state.finish,
      };
    });
  };

  render() {
    let defaultbook = 'black';

    if (this.state.process) {
      defaultbook = 'process';
    }
    if (this.state.finish) {
      defaultbook = 'finish';
    }

    return (
      <span className="book-container">
        <span className={defaultbook}>
          {this.props.author} : {this.props.book}
        </span>
        <div className="images">
          <button className="btn btn-first" onClick={this.inProcessBook}>
            <i className="bookmark icon"></i>
          </button>

          <button className="btn btn-second" onClick={this.finishBook}>
            <i className="book icon"></i>
          </button>

          <button
            className="btn btn-third"
            onClick={() => this.props.deleteFunc(this.props.id)}
          >
            <i className="trash alternate outline icon"></i>
          </button>
        </div>
      </span>
    );
  }
}

export default BookItem;
