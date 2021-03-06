import React, { Component } from "react";
import mapbox from "mapbox-gl";
import "../css/Map.css";

class Map extends Component {
  componentDidMount() {
    const app = this.props.app;

    mapbox.accessToken =
      "pk.eyJ1Ijoiam9yaWstdmFuLXJ1aXN3aWprIiwiYSI6ImNsMGpuc3c4NDAyZ3gzZG9kejJuczI4eXcifQ.xmrLCnZDAr8E9u99hF14Kw";

    const map = new mapbox.Map({
      container: "map",
      style: app.state.style,
      center: [app.state.longitude, app.state.latitude],
      zoom: 10,
    });

    const navigationControl = new mapbox.NavigationControl();
    map.addControl(navigationControl);

    this.props.app.setState({
      map: map,
    });
  }

  render() {
    const app = this.props.app;
    const map = app.state.map;

    if (map) {
      map.setStyle(app.state.style);
    }

    return <div id="map"></div>;
  }
}

export default Map;
