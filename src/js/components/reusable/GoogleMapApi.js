import React from 'react';
import PropTypes from 'prop-types';

class GoogleMapApi extends React.Component {
  componentDidMount() {
    if (!this.props.multiple) this.initMap(document.getElementById("map"), [])
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.listings !== this.props.listings) {
      this.initMap(document.getElementById("map"), nextProps.listings);
    }
  }
  
  initMap = (node, listings) => {
    if (!window.google) return;
    const map = new window.google.maps.Map(node, {
      center: {lat: this.props.latitude, lng: this.props.longitude},
      zoom: this.props.zoom,
      disableDefaultUI: this.props.disableUI
    });
    if (this.props.multiple) {
      listings.forEach(listing => {
        new window.google.maps.Marker({
          position: {
            lat: listing.location.latitude,
            lng: listing.location.longitude
          },
          label: {
            text: `$${listing.price}`,
            color: "white"
          },
          map: map
        })
      })
    } else if (this.props.restaurant) {
      new window.google.maps.Marker({
        position: {
          lat: this.props.latitude,
          lng: this.props.longitude
        },
        map: map
      })
    } else {
      const circle = new window.google.maps.Circle({
        center: {
          lat: this.props.latitude,
          lng: this.props.longitude
        },
        radius: 1000,
        strokeColor: "#57a8a9",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#70d8e0",
        fillOpacity: 0.4
      });
      circle.setMap(map)
    }
  };
  
  render() {
    return(
      <div className={this.props.classes}>
        <div id="map" style={{height: this.props.height}}>
        </div>
      </div>
    )
  }
}

GoogleMapApi.defaultProps = {
  height: "400px",
  multiple: false,
  zoom: 13,
  restaurant: false,
  disableUI: false
};

GoogleMapApi.propTypes = {
  height: PropTypes.string.isRequired,
  multiple: PropTypes.bool
};

export default GoogleMapApi;