import React, { Component } from "react";

class PlaceItem extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const { place } = this.props;

    return (
      <div className="place-item">
        {place.name}, ({place.latitude}, {place.longitude})
      </div>
    );
  }
}

export default PlaceItem;
