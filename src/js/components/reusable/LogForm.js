import React from 'react';
import MdClose from 'react-icons/lib/md/close';
import DropDownOptions from "./form/DropDownOptions";
import FormSupport from "../../hoc/FormSupport";

const LogForm = props => {
  return(
    <form id="search" className="w-100 p-4" onClick={e => props.focusHandle(e,"input-search", "active")}>
      <div className="d-flex justify-content-between">
        <div className="cursor" onClick={() => props.clickOut("activeModal")}><MdClose size={25}/></div>
        <div className="smaller-font">Search</div>
        <div className="smaller-font">Clear</div>
      </div>
      <div className="mt-4">
        <div>
          <input id="input-search" className="w-100 font-2 h-3rem p-3 border" placeholder="Search here"/>
        </div>
        <div className="position-relative">
          <DropDownOptions active={(props.active? " ":"d-none")}/>
        </div>
      </div>
    </form>
  )
};

export default FormSupport(LogForm);