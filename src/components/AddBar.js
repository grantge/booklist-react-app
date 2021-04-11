import React from 'react';

class AddBar extends React.Component {
  state = {
    author: '',
    book: '',
    isValid: false,
  };

  addAuthor = (e) => {
    this.setState({
      author: e.target.value,
    });
  };

  addBook = (e) => {
    this.setState({
      book: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();

    if (this.state.author.length < 4) {
      this.setState({
        isValid: true,
      });
    } else if (this.state.book.length < 4) {
      this.setState({
        isValid: true,
      });
    } else {
      this.setState({
        isValid: false,
      });

      this.props.addFunc(this.state.author, this.state.book);
    }
  };

  render() {
    console.log(this.state.isValid);
    let error = '';
    let errorStyle = 'ui small icon input';

    if (this.state.isValid) {
      errorStyle = 'ui input error';
      error = (
        <div className="ui pointing red basic label">That name is short!</div>
      );
    } else if (!this.state.isValid) {
      errorStyle = 'ui small icon input';
      error = '';
    }
    return (
      <form className="add-container" onSubmit={this.submit}>
        <div className={errorStyle}>
          <input
            type="text"
            placeholder="Add Author..."
            onChange={this.addAuthor}
          />
          {error}
        </div>

        <div className={errorStyle}>
          <input
            type="text"
            placeholder="Add Book..."
            value={this.state.validateBook}
            onChange={this.addBook}
          />
          {error}
        </div>

        <button className="tiny ui black button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default AddBar;
