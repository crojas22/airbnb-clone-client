import React from 'react';
import PropTypes from 'prop-types';
import { TitleParagraph } from "../IndividualListingExperience";

class GoogleMapApi extends React.Component {
  componentDidMount() {
    this.initMap(document.getElementById("map"));
  }
  
  initMap = node => {
    if (!window.google) return;
    const address = this.props.location;
    const geoCoder = new window.google.maps.Geocoder();
    const map = new window.google.maps.Map(node, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 12
    });
    geoCoder.geocode({'address': address}, (result, status) => {
      if (status === "OK") {
        map.setCenter(result[0].geometry.location);
        new window.google.maps.Marker({
          position: result[0].geometry.location,
          map: map,
          title:address
        })
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  };
  
  render() {
    return(
      <div className={this.props.classes}>
        {
          this.props.info
        }
        <div id='map'>
        </div>
      </div>
    )
  }
}

GoogleMapApi.propTypes = {
  location: PropTypes.string.isRequired
};

export default GoogleMapApi;