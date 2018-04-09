import React from 'react';
import FunctionArray from "../../functions/FunctionArray";
import SingleLink from "../homepage/SingleLink";

const SearchResults = props => {
  return(
    <div className="mt-6 z-negative w-lg-or-less-100 w-65">
      <div className="container-fluid pt-4">
        <h3 className="mb-1">
          Introducing Airbnb Plus
        </h3>
        <h5 className="font-weight-light">
          A new selection of homes verified for quality & comfort
        </h5>
        <div className="row my-4">
          {
            FunctionArray.renderComponentsWStyle(props.data, true ,"home", SingleLink, "col-lg-6 col-xl-4 col-sm-6 my-2")
          }
        </div>
      </div>
    </div>
  )
};

export default SearchResults;