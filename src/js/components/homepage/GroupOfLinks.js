import React from 'react';
import SingleLink from "./SingleLink";

const GroupOfLinks = props => {
  const renderComponent = (array=[],classArray=[], Component,  start, end) => (
    array.slice(start, end).map((each, index) => (
      <Component key={each.id} {...each} to={props.to} classes={classArray[index]}/>
    ))
  );
  
  const classArray = ["col-6 col-md-4 col-xl-3 mb-3", "col-6 col-md-4 col-xl-3 mb-3",
    "d-none d-md-block col-md-4 col-xl-3 mb-3", "d-none d-xl-block col-xl-3 mb-3"];
  
  return(
    <div className="container-fluid px-md-5 pt-5">
      <h4 className="my-2">
        {
          props.title
        }
      </h4>
      <div className="row py-2">
        {
          renderComponent(props.homeListing, classArray, SingleLink, 0, 4)
        }
      </div>
      <div className="row py-2">
        {
          renderComponent(props.homeListing, classArray, SingleLink, 4 )
        }
      </div>
    </div>
  )
};

export default GroupOfLinks;