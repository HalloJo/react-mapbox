import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import Toggler from "./components/Toggler";
import Search from "./components/Search";
import PlacesPanel from "./components/PlacesPanel";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      latitude: 52.2995,
      longitude: 5.2434,
      style: "mapbox://styles/mapbox/dark-v9",
      places: [
        { name: "Huizen", latitude: 52.2995, longitude: 5.2434 },
        { name: "Huizen", latitude: 52.2995, longitude: 5.2434 },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Toggler app={this} />
        <PlacesPanel app={this} />
        <Search app={this} />
        <Map app={this} />
      </div>
    );
  }
}

export default App;
