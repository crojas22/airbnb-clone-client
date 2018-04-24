import React from 'react';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import StarRating from "../reusable/StarRating";
import { BtnInput } from "../reusable/Buttons";

const QuickReservation = props => (
  <form className={"p-3 border bg-white " + props.classes}>
    <div className="pb-3 border-bottom">
      <span className="mr-2 font-2">${props.price}</span>
      <span className="font-regular d-inline-block">{props.per}</span>
      <StarRating total={50}/>
    </div>
    <div className="my-3">
      <div>
        <label className="m-0 font-regular font-weight-light">Dates</label>
        <div className="d-flex align-items-center">
          <input placeholder="Check In" className="border-right-0 border px-2 py-30 w-50 font-weight-light"/>
          <div className="border-top border-bottom py-30">
            <MdArrowForward size={15}/>
          </div>
          <input placeholder="Check Out" className="border-left-0 border px-2 py-30 w-50 font-weight-light"/>
        </div>
      </div>
      <LabelInputDropDownTrigger header="Dates"
                                 label="1 guest"
      />
      <BtnInput title="Request to Book" classes="btn-main mt-2 font-2 px-3 w-100"/>
      <div className="text-center pt-2 smallest-font">
        You won’t be charged yet
      </div>
    </div>
  </form>
);

export const LabelInputDropDownTrigger = ({label, header}) => (
  <div className="my-3">
    <label className="m-0 font-regular font-weight-light">{header}</label>
    <div className="d-flex align-items-center">
      <div className="border w-100 rounded-0 p-2 d-flex justify-content-between align-items-center cursor">
            <span className="py-1 font-weight-light text-muted">
              {
                label
              }
            </span>
        <span>
              <MdKeyboardArrowDown size={20} className="mb-0"/>
            </span>
      </div>
    </div>
  </div>
);

export default QuickReservation;