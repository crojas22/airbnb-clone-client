import React from 'react';

export default class FunctionArray {
  
  static renderComponentWStartEnd = (array=[], to, classArray=[], Component,  start, end) => (
    array.slice(start, end).map((each, index) => (
      <Component key={each.id} {...each} to={to} classes={classArray[index]}/>
    ))
  );
  
  static renderComponentsWStyle = (array=[], to, Component, wrapperClasses) => (
    array.map(each => (
      <Component key={each.id} {...each} to={to} classes={wrapperClasses}/>
    ))
  )
}