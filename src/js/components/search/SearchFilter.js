import React from 'react';
import { BtnInput } from "../reusable/Buttons";

const SearchFilter = props => {
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

export const HomeFilterOptions = () => (
  <React.Fragment>
    <BtnInput title="Dates" classes="border ml-1 mr-3 mt-1 font-regular btn-grey"/>
    <BtnInput title="Guests" classes="border mr-3 mt-1 font-regular btn-grey"/>
    <BtnInput title="Home type" classes="border mr-3 mt-1 font-regular btn-grey d-none d-sm-inline-block"/>
    <BtnInput title="Price" classes="border mr-3 mt-1 font-regular btn-grey d-none d-sm-inline-block"/>
    <BtnInput title="Instant Book" classes="border mr-3 mt-1 font-regular btn-grey d-none d-lg-inline-block"/>
    <BtnInput title="Trip type" classes="border mr-3 mt-1 font-regular btn-grey d-none d-lg-inline-block"/>
    <BtnInput title="More filters" classes="border font-regular mt-1 btn-grey d-none d-sm-inline-block"/>
    <BtnInput title="Filters" classes="border font-regular mt-1 btn-grey d-sm-none"/>
  </React.Fragment>
);

export const ExperienceFilterOptions = () => (
  <React.Fragment>
    <BtnInput title="Dates" classes="border ml-1 mr-3 mt-1 font-regular btn-grey"/>
    <BtnInput title="Guests" classes="border mr-3 mt-1 font-regular btn-grey"/>
    <BtnInput title="Price" classes="border mr-3 mt-1 font-regular btn-grey"/>
  </React.Fragment>
);

export default SearchFilter;