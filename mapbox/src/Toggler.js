import React, { Component } from "react";
import "./Toggler.css";

class Toggler extends Component {
  setLayer(url) {
    this.props.app.setState({
      style: url,
    });
  }

  render() {
    const styles = [
      {
        name: "Satellite",
        url: "mapbox://styles/mapbox/satellite-streets-v11",
      },
      {
        name: "Dark",
        url: "mapbox://styles/mapbox/dark-v9",
      },
      {
        name: "Light",
        url: "mapbox://styles/mapbox/light-v9",
      },
    ];

    const buttons = styles.map((style) => {
      const app = this.props.app;
      let className = "";

      if (style.url === app.state.style) {
        className = "selected";
      }

      return (
        <button
          className={className}
          onClick={() => {
            this.setLayer(style.url);
          }}
        >
          {style.name}
        </button>
      );
    });

    return <div className="toggler">{buttons}</div>;
  }
}

export default Toggler;
