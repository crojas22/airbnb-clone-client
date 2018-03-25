import React from 'react';
import StarRating from "../reusable/StarRating";
import { BtnInput } from "../reusable/Buttons";

const Fixed = props => (
  <div className={"position-fixed border-top position-lb-0 bg-white z-100 " + props.classes}>
    <FixedPriceButton classes="container py-4"
                      price={props.price}
                      per={props.per}
                      button={<BtnInput title={props.title}
                                        classes="btn-main font-2 px-3"
                                        onClick={() => props.clickOnOff("activeModal")}/>}/>
  </div>
);

Fixed.defaultProps = {
  title: "Request to Book"
};

export const FixedPriceButton = props => (
  <div className={"d-flex justify-content-between "+props.classes}>
    <div>
      <div>
            <span className="mr-2 font-2">
              ${props.price}
              </span>
        <span className="font-regular d-inline-block">
          {props.per}
          </span>
      </div>
      <StarRating total={50}/>
    </div>
    {
      props.button
    }
  </div>
);

export default Fixed;