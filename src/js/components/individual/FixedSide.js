import React from 'react';
import ScrollPosition from "../../hoc/ScrollPosition";

const FixedSide = props => (
  props.active ?
    <div className={""+props.class1}>
      <div className={""+props.class2}>
        <div className={"row "+props.class3}>
          <div className={""+props.class4}>
          </div>
          <div className={props.stick}>
            {
              props.render
            }
          </div>
        </div>
      </div>
    </div>
    :
    <div className={"d-none "+props.notStick}>
      {
        props.render
      }
    </div>
);

export default ScrollPosition(FixedSide)('.point-reference');