import React from 'react';

export default class FunctionArray {
  
  static renderComponentWStartEnd = (array=[], to, classArray=[], Component,  start, end) => (
    array.slice(start, end).map((each, index) => (
      <Component key={each.id} {...each} to={to} classes={classArray[index]}/>
    ))
  );
  
  static renderComponentsWStyle = (array=[], shouldDisplay, to, Component, wrapperClasses) => (
    array.map(each => (
      <Component key={each.id} {...each} shouldDisplay={shouldDisplay} to={to} classes={wrapperClasses}/>
    ))
  );
  
  static createHomeLocations = (array=[]) => (
    array.map((each, index) => (
      {
        location: `${each.city}, ${each.state} ${each.country}`,
        price: each.price,
        title: each.title,
        zIndex: index + 1
      }
    ))
  )
}