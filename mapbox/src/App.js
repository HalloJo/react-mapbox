import React, { Component } from "react";
import "./App.css";
import Map from "./Map";
import Toggler from "./Toggler";
import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      latitude: 52.2995,
      longitude: 5.2434,
      style: "mapbox://styles/mapbox/dark-v9",
    };
  }

  render() {
    return (
      <div className="App">
        <Toggler app={this} />
        <Search app={this} />
        <Map app={this} />
      </div>
    );
  }
}

export default App;
