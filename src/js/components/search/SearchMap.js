import React from 'react';
import GoogleMapApi from "../reusable/GoogleMapApi";

const SearchMap = () => {
  return(
    <div className="d-none d-lg-block">
      <GoogleMapApi
        height="82vh"
        location={"Hialeah, FL"}/>
    </div>
  )
};

export default SearchMap;