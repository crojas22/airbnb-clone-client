import React from 'react';
import GoogleMapApi from "../reusable/GoogleMapApi";
import MdLocalRestaurant from 'react-icons/lib/md/local-restaurant';

export default () => {
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
            Perricone's Marketplace & Cafe  <MdLocalRestaurant />
          </h5>
          <div className="d-flex justify-content-between font-weight-light smaller-font">
            <div>
              9 Barclay St, Manhattan
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
            +1 212-571-2930
          </div>
          <div className="color-green">
            Call
          </div>
        </div>
        <div className="p-4 border-bottom border-right border-left d-flex justify-content-between font-weight-light smaller-font">
          <div>
            thewoolypublic.com
          </div>
          <div className="color-green">
            View
          </div>
        </div>
      </div>
    </div>
  )
}