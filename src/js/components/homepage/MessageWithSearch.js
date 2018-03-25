import React from 'react';
import MdSearch from 'react-icons/lib/md/search';
import FormSupport from "../../hoc/FormSupport";
import LogForm from "../reusable/LogForm";
import { BtnInput, BtnSubmit } from "../reusable/Buttons";
import FullPageModal from "../reusable/FullPageModal";
import DropDownOptions from "../reusable/form/DropDownOptions";

const MessageWithSearch = props => (
  <div className="w-50 " onClick={e => props.focusHandle(e,"input-gallery", "active2")}>
    <div>
      <h1 className="text-white">
        Book unique homes and experiences all over the world.
      </h1>
    </div>
    <div className="d-none d-lg-block">
      <div className="d-flex bg-white align-items-center rounded">
        <div className="ml-2 mt-1">
          <MdSearch size={25} color={"#757575"}/>
        </div>
        <input id="input-gallery" className="w-100 font-2 h-3rem px-2 py-3 border-0" placeholder="Search Locations"/>
        <BtnSubmit title="Search" classes="btn-main p-2 m-2"/>
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
);

export default FormSupport(MessageWithSearch);