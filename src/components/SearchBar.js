import React from "react";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  onInputChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
  };
  onFormSubmit = event => {
    // preventDefault() prevents auto page reload on form submission.
    event.preventDefault();
    // TODO: Remember to call the callback from
    // the parent to ensure successful submission.
    this.props.onFormSubmit(this.state.searchTerm);
  };
  render() {
    return (
      <div className="search-bar ui segment ">
        <form className="ui form " onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search YouTubez</label>
            <input
              onChange={this.onInputChange}
              type="text"
              value={this.state.searchTerm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
