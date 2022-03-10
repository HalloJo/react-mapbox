import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      isLoading: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      value: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={value}
          onChange={this.handleChange}
          placeholder="Add something.."
        />
      </form>
    );
  }
}

export default Search;
