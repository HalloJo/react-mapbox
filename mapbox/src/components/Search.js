import React, { Component } from "react";
import "../css/Search.css";

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

    const accessToken =
      "pk.eyJ1Ijoiam9yaWstdmFuLXJ1aXN3aWprIiwiYSI6ImNsMGpuc3c4NDAyZ3gzZG9kejJuczI4eXcifQ.xmrLCnZDAr8E9u99hF14Kw";
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.value}.json?access_token=${accessToken}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const places = this.props.app.state.places;
        const firstResult = data.features[0];

        console.log(data);

        places.push({
          name: this.state.value,
          longitude: firstResult.center[0],
          latitude: firstResult.center[1],
        });

        this.props.app.setState({
          places: places,
        });

        this.setState({
          value: "",
        });
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
