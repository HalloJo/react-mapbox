import React, { Component } from "react";
import "./Toggler.css";

class Toggler extends Component {
  render() {
    return <div className="toggler">{this.props.app.state.style}</div>;
  }
}

export default Toggler;
