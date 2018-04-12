import React from 'react';
import PropTypes from 'prop-types';
import { Loading } from "./Loading";

class GoogleMapApi extends React.Component {
  state = {
    loading: true
  };
  
  componentDidMount() {
    this.initMap(document.getElementById("map"));
  }
  
  initMap = node => {
    if (!window.google) return;
    const location = this.props.location;
    const geoCoder = new window.google.maps.Geocoder();
    const map = new window.google.maps.Map(node, {
      center: {lat: -34.397, lng: 150.644},
      zoom: this.props.zoom
    });
    geoCoder.geocode({'address': location}, (result, status) => {
      if (status === "OK") {
        map.setCenter(result[0].geometry.location);
        if (this.props.multiple) {
          this.setMarkers(this.props.data, geoCoder, map)
        } else {
          const circle = new window.google.maps.Circle({
            center: result[0].geometry.location,
            radius: 1000,
            strokeColor: "#57a8a9",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#70d8e0",
            fillOpacity: 0.4
          });
          circle.setMap(map)
        }
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };
  
  setMarkers = (array=[], geoCoder, map) => {
    for (let i = 0; i < array.length; i++) {
      geoCoder.geocode({'address': `${array[i].city}, ${array[i].state} ${array[i].country}`}, function(result, status) {
        if (status === "OK") {
          new window.google.maps.Marker({
            position: result[0].geometry.location,
            map: map,
          })
        }
      })
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
  zoom: 13
};

GoogleMapApi.propTypes = {
  location: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  multiple: PropTypes.bool
};

export default GoogleMapApi;