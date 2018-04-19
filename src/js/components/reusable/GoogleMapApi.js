import React from 'react';
import PropTypes from 'prop-types';
import { url } from "../../epics";

class GoogleMapApi extends React.Component {
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
          this.setMarkers(this.props.data, geoCoder, map, this.props.to)
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
  
  setMarkers = (array=[], geoCoder, map, to) => {
    let i = 0,
      length = array.length;
    for (i; i < length; i++) {
      let id = array[i].id,
        price = array[i].price;
      if (!array[i].location) {
        geoCoder.geocode({'address': `${array[i].city}, ${array[i].state} ${array[i].country}`}, async function(result, status) {
          if (status === "OK") {
            await fetch(url(`v1/${to}/location/${id}`), {
              method: "POST",
              body: JSON.stringify({
                latitude: result[0].geometry.location.lat(),
                longitude: result[0].geometry.location.lng()
              }),
              headers: new Headers({'Content-Type': 'application/json'})
            });
            new window.google.maps.Marker({
              position: result[0].geometry.location,
              label: {
                text: `$${price}`,
                color: "white"
              },
              map: map,
            })
          } else {
            i--;
          }
        })
      } else if (array[i].location) {
        new window.google.maps.Marker({
          position: {
            lat: array[i].location.latitude,
            lng: array[i].location.longitude
          },
          label: {
            text: `$${price}`,
            color: "white"
          },
          map: map
        })
      }
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