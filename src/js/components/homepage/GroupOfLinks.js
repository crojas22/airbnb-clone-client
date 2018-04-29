import React from 'react';
import PropTypes from 'prop-types';
import FunctionArray from "../../functions/FunctionArray";

const GroupOfLinks = props => {
  const classArray = ["col-6 col-md-4 col-xl-3 mb-3", "col-6 col-md-4 col-xl-3 mb-3",
    "d-none d-md-block col-md-4 col-xl-3 mb-3", "d-none d-xl-block col-xl-3 mb-3"];
  
  return(
    <div className="container-fluid px-0 pt-4">
      <h4 className="my-2">
        {
          props.title
        }
      </h4>
      <div className="row py-2">
        {
          FunctionArray.renderComponentWStartEnd(props.homeListing, props.to, classArray, props.component, 0, 4)
        }
      </div>
      <div className="row py-2">
        {
          FunctionArray.renderComponentWStartEnd(props.homeListing, props.to, classArray, props.component, 4 )
        }
      </div>
      {
        props.linkTo
      }
    </div>
  )
};

GroupOfLinks.propTypes = {
  title: PropTypes.string,
  homeListing: PropTypes.array,
  linkTo: PropTypes.element
};

export default GroupOfLinks;