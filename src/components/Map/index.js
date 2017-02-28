import React, { Component, PropTypes } from 'react';

const google = window.google;

class Map extends Component {
  static propTypes = {
    address: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired
  }

  initMaps = () => {
    const { address, location } = this.props;
    const map = new google.maps.Map(this.map, {
      center: location,
      zoom: 15,
      zoomControl: true,
      scaleControl: true,
      scrollwheel: false,
      mapTypeControl: false,

    });

    const infowindow = new google.maps.InfoWindow({
      content: address
    });

    const marker = new google.maps.Marker({
      position: location,
      animation: google.maps.Animation.DROP,
      title: 'Heritz'
    });

    marker.setMap(map);
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
  }

  componentDidMount() {
    this.initMaps();
  }

  render() {
    const { address, location } = this.props;

    if(!address || !location || !google) { return null; }

    return(
      <div style={{ width: '100%', height: '40vh' }} id="map" ref={(ref) => { this.map = ref }}></div>
    );
  }
}

module.exports = Map;
