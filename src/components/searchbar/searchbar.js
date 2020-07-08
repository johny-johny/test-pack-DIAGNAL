import React from "react";
import { connect } from "react-redux";
class Search extends React.Component {
  state = {
    searchValue: "",
    searchResult: null,
  };
  handleChange = ({ target }) => {
    this.setState({
      searchValue: target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatchSearchResult(this.state.searchValue);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="search item"
          onChange={this.handleChange}
        />
        <i class="fas fa-search-location"></i>
        <button class="search-btn" type="submit">
          <img src="../../../iconfinder_Rounded-10_2024633.png"></img>
        </button>
        <span class="glyphicon glyphicon-search"></span>
        <br clear="all"></br>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSearchResult: (searchResult) =>
      dispatch({ type: "SEARCH_RESULT", searchResult: searchResult }),
  };
};

export default connect(null, mapDispatchToProps)(Search);
