import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  onInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
    console.log(event.target.value);
  };
  onFormSubmit = event => {
    // preventDefault() prevents auto page reload on form submission.
    event.preventDefault();
    // TODO: Remember to call the callback from
    // the parent to ensure successful submission.
  };
  render() {
    return (
      <div className="search-bar ui segment ">
        <form className="ui form " onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search YouTubez</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
