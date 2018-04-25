import React from 'react';
import GoogleMapApi from "../reusable/GoogleMapApi";
import MdLocalRestaurant from 'react-icons/lib/md/local-restaurant';

export default ({title, address, city, phone, website}) => {
  return(
    <div className="shadow">
      <div>
        <GoogleMapApi
          height={200}
          zoom={15}
          restaurant={true}
          disableUI={true}
          latitude={37.090240}
          longitude={-95.712891}
        />
      </div>
      <div>
        <div className="p-4 border-bottom border-right border-left">
          <h5 className="font-weight-light mb-4">
            {title}  <MdLocalRestaurant />
          </h5>
          <div className="d-flex justify-content-between font-weight-light smaller-font">
            <div>
              {address}, {city}
            </div>
            <div className="color-green">
              Directions
            </div>
          </div>
        </div>
        <div className="p-4 border-bottom border-right border-left d-flex justify-content-between font-weight-light smaller-font">
          <div>
            Open now
          </div>
          <div className="color-green">
            Hours
          </div>
        </div>
        <div className="p-4 border-bottom border-right border-left d-flex justify-content-between font-weight-light smaller-font">
          <div>
            {phone}
          </div>
          <div className="color-green">
            Call
          </div>
        </div>
        <div className="p-4 border-bottom border-right border-left d-flex justify-content-between font-weight-light smaller-font">
          <div>
            {website}
          </div>
          <div className="color-green">
            View
          </div>
        </div>
      </div>
    </div>
  )
}