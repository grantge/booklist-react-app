import React from 'react';

class SearchBar extends React.Component {
  state = {
    filterAuthor: '',
  };

  searchAuthor = (e) => {
    const filterAuthor = e.target.value;
    this.setState({
      filterAuthor: filterAuthor,
    });
    this.props.searchAuthor(filterAuthor);
  };

  render() {
    return (
      <form className="search-container">
        <div className="ui small icon input search">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.filterAuthor}
            onChange={this.searchAuthor}
          />
          <i className="search icon"></i>
        </div>
      </form>
    );
  }
}

export default SearchBar;
