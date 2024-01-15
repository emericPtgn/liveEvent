// mapContainer.js
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: this.props.latitude,
          lng: this.props.longitude,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA4txvZ_jHGPMugrvcXeDSsPlDqKxfChbU',
})(MapContainer);
