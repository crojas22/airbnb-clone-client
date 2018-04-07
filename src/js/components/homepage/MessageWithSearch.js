import React from 'react';
import MdSearch from 'react-icons/lib/md/search';
import FormSupport from "../../hoc/FormSupport";
import LogForm from "../reusable/LogForm";
import { BtnInput, BtnSubmit } from "../reusable/Buttons";
import FullPageModal from "../reusable/FullPageModal";
import DropDownOptions from "../reusable/form/DropDownOptions";

const MessageWithSearch = props => (
  <div className="d-flex align-items-center justify-content-center set-height"
       onClick={e => props.focusHandle(e,"input-gallery", "active2")}>
    <div className="w-50 ">
      <div>
        <h1 className="text-white">
          Book unique homes and experiences all over the world.
        </h1>
      </div>
      <div className="d-none d-lg-block">
        <div className="d-flex bg-white align-items-center rounded">
          <SearchInputWithIcon
            for="input-gallery"
            inputClass="w-100 font-2 h-3rem px-2 py-3 border-0"
            button={<BtnSubmit title="Search" classes="btn-main p-2 m-2"/>}/>
        </div>
        <div className="position-relative">
          <DropDownOptions active={(props.active2? " ":" d-none")}/>
        </div>
      </div>
      <FullPageModal active={props.active}
                     classes="bg-white "
                     InnerComponent={<LogForm clickOut={props.clickOnOff}/>}
                     trigger={
                       <BtnInput title={<div><MdSearch size={20}/>Search Locations</div>}
                                 onClick={() => props.clickOnOff("activeModal")}
                                 classes="border-shadow bg-white d-lg-none text-left py-25 px-3 btn-block font-weight-light"/>
                     }/>
    </div>
  </div>
);

export const SearchInputWithIcon = props => (
  <React.Fragment>
    <label htmlFor={props.for} className="ml-2 mt-1 mb-0">
      <MdSearch size={25} color={"#757575"}/>
    </label>
    <input id={props.for} className={props.inputClass} placeholder="Search Locations"/>
    {
      props.button
    }
  </React.Fragment>
);

export default FormSupport(MessageWithSearch);