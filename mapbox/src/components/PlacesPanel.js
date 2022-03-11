import React, { Component } from "react";
import "../css/PlacesPanel.css";
import PlaceItem from "./PlaceItem";

class PlacesPanel extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const places = this.props.app.state.places;

    const placeItems = places.map((place) => {
      return <PlaceItem place={place} />;
    });

    return <div className="places">{placeItems}</div>;
  }
}

export default PlacesPanel;
