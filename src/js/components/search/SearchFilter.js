import React from 'react';
import { BtnInput } from "../reusable/Buttons";
import OnOff from "../../hoc/OnOff";

export default props => {
  return(
    <div className="position-relative pt-4">
      <div className="pt-5 mt-sm-2 mt-lg-0">
        <div className={"p-3 border-bottom "+props.classes}>
          {
            props.options
          }
        </div>
      </div>
    </div>
  )
};

export const HomeFilterOptions = ({clickOnOff,guests}) => (
  <React.Fragment>
    <BtnInput title="Dates"
              classes="border ml-1 mr-2 mt-1 font-regular btn-grey"
              onClick={() => clickOnOff("dates")}
    />
    <BtnInput title="Guests"
              classes={"border mr-2 mt-1 font-regular "+(guests?"text-white bg-green":"btn-grey")}
              onClick={() => {
                clickOnOff("guests");
                clickOnOff("isModalOn");
              }}
    />
    <BtnInput title="Home type" classes="border mr-2 mt-1 font-regular btn-grey d-none d-sm-inline-block"/>
    <BtnInput title="Price" classes="border mr-2 mt-1 font-regular btn-grey d-none d-sm-inline-block"/>
    <BtnInput title="Instant Book" classes="border mr-2 mt-1 font-regular btn-grey d-none d-lg-inline-block"/>
    <BtnInput title="Trip type" classes="border mr-2 mt-1 font-regular btn-grey d-none d-lg-inline-block"/>
    <BtnInput title="More filters" classes="border font-regular mt-1 btn-grey d-none d-sm-inline-block"/>
    <BtnInput title="Filters" classes="border font-regular mt-1 btn-grey d-sm-none"/>
  </React.Fragment>
);

export const ExperienceFilterOptions = () => (
  <React.Fragment>
    <BtnInput title="Dates" classes="border ml-1 mr-2 mt-1 font-regular btn-grey"/>
    <BtnInput title="Guests" classes="border mr-2 mt-1 font-regular btn-grey"/>
    <BtnInput title="Price" classes="border mr-2 mt-1 font-regular btn-grey"/>
  </React.Fragment>
);

export const RestaurantFilterOptions = () => (
  <React.Fragment>
    <BtnInput title="Dates" classes="border ml-1 mr-2 mt-1 font-regular btn-grey ml-md-4"/>
    <BtnInput title="Guests" classes="border mr-2 mt-1 font-regular btn-grey"/>
    <BtnInput title="Filter" classes="border mr-2 mt-1 font-regular d-md-none btn-grey"/>
    <BtnInput title="Time of day" classes="border ml-1 mr-2 mt-1 d-none d-md-inline-block font-regular btn-grey"/>
    <BtnInput title="Type of Meal" classes="border mr-2 mt-1 font-regular d-md-inline-block d-none btn-grey"/>
    <BtnInput title="Cuisines" classes="border mr-2 mt-1 font-regular d-md-inline-block d-none btn-grey"/>
  </React.Fragment>
);