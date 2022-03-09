import React, { Component } from "react";
import mapbox from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

class Map extends Component {
  componentDidMount() {
    mapbox.accessToken =
      "pk.eyJ1Ijoiam9yaWstdmFuLXJ1aXN3aWprIiwiYSI6ImNsMGpuc3c4NDAyZ3gzZG9kejJuczI4eXcifQ.xmrLCnZDAr8E9u99hF14Kw";

    var map = new mapbox.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
    });
  }

  render() {
    return (
      <div id="map" className="App">
        HERE WILL GO OUR MAP
      </div>
    );
  }
}

export default Map;
