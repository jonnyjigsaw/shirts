import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const OverlayComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,
  }}>
    {text}
  </div>
);

class MapView extends Component {
  static defaultProps = {
    center: {lat: 42.32, lng: -71.06},
    zoom: 15
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}>

        <OverlayComponent
          lat={42.322160}
          lng={-71.062317}
          text={'Brewing Company'}
        />

      </GoogleMapReact>
)}
}

export default MapView
