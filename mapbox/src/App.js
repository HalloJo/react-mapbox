import React, { Component } from "react";
import "./App.css";
import Map from "./Map";
import Toggler from "./Toggler";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 52.2995,
      longitude: 5.2434,
      style: "mapbox://styles/mapbox/dark-v9",
    };
  }

  render() {
    return (
      <div className="App">
        <Toggler app={this} />
        <Map app={this} />
      </div>
    );
  }
}

export default App;
