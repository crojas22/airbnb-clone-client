import React from 'react';
import GoogleMapApi from "../reusable/GoogleMapApi";
import FunctionArray from "../../functions/FunctionArray";

const SearchMap = props => {
  return(
    <div className="d-none d-lg-block">
      <GoogleMapApi
        data={props.data}
        zoom={4}
        height="82vh"
        multiple={true}
        location={"USA"}/>
    </div>
  )
};

export default SearchMap;