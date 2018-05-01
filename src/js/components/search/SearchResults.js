import React from 'react';
import FunctionArray from "../../functions/FunctionArray";
import SingleLink from "../homepage/SingleLink";

const SearchResults = props => {
  return(
    <div className={"mt-5plus z-negative w-lg-or-less-100 "+(props.withMap?"w-65":"mx-lg-4")}>
      <div className={"container-fluid pt-4 "+(props.withMap?"":"px-md-4 px-lg-5")}>
        {
          props.header
        }
        <div className="row my-4">
          {
            FunctionArray.renderComponentsWStyle(props.data, true , props.to, props.component, props.linkClass)
          }
        </div>
      </div>
    </div>
  )
};

export const HomeResultsHeader = () => (
  <React.Fragment>
    <h3 className="mb-1">
      Introducing Airbnb Plus
    </h3>
    <h5 className="font-weight-light">
      A new selection of homes verified for quality & comfort
    </h5>
  </React.Fragment>
);

export const GeneralResultsHeader = ({title}) => (
  <h3 className="mb-1">
    {
      title
    }
  </h3>
);

export default SearchResults;