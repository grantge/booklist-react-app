import React from 'react';

class AddBar extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="add-container">
        <div className="ui small icon input">
          <input type="text" placeholder="Add Author..." />
        </div>
        <div className="ui small icon input input-last">
          <input type="text" placeholder="Add Book..." />
        </div>
        <button
          className="tiny ui black button"
          onClick={() => this.props.addFunc('book', 'book')}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default AddBar;
