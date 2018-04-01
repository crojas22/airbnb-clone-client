import React from 'react';
import { Link, withRouter } from "react-router-dom";
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import MdSearch from 'react-icons/lib/md/search';
import OnOff from "../../hoc/OnOff";
import { BtnInput } from "./Buttons";
import FullPageModal from "./FullPageModal";
import LogForm from "./LogForm";
import { SearchInputWithIcon } from "../homepage/MessageWithSearch";

const Navigation = props => (
  <div id="navigation" className="border-bottom">
    <nav className="py-25 py-lg-0 py-sm-3 navbar-expand-md bg-white position-relative z-200">
      <div className="d-flex align-items-center z-200 justify-content-lg-between">
        <div className="h-3rem px-3 cursor d-flex no-wrap align-items-center d-lg-none" onClick={() => props.clickOnOff("activeDrop")}>
          <img className="img-fluid h-100 mr-2 mr-lg-3" src="/images/logo/airbnb-logo.png" alt="airBnb-log"></img>
          <span className={"d-lg-none d-inline-block mr-2"+(props.activeDrop?" rotate-up":" rotate-down")}><FaAngleDown/></span>
        </div>
        <div className="h-3rem px-3 d-none d-lg-flex no-wrap align-items-center">
          <Link to="/">
            <img style={{height:50, width:70}} className="img-fluid mr-2" src="/images/logo/airbnb-logo.png" alt="airBnb-log"></img>
          </Link>
        </div>
        <div className="w-100 pr-3">
          <FullPageModal active={props.activeModal}
                         classes="bg-white"
                         InnerComponent={<LogForm clickOut={props.clickOnOff}/>}
                         trigger={
                           <BtnInput title={<div><MdSearch size={20}/> Search Locations</div>}
                                     onClick={() => props.clickOnOff("activeModal")}
                                     classes="border-shadow bg-white d-md-none text-left py-25 px-3 btn-block font-weight-light"/>
                         }/>
          <div className={"d-none "+(props.match.path!=="/"?"d-md-block":"")}>
            <div className="border-left d-flex py-2 px-3">
              <SearchInputWithIcon
                for="input-gallery-nav"
                inputClass="border-0 p-1"/>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-flex">
          <div className="mx-3 px-1 py-4 text-nowrap border-b hover-border">
            Become a host
          </div>
          <div className="mx-3 px-1 py-4 text-nowrap border-b hover-border">
            Sign Up
          </div>
          <div className="mx-3 px-1 py-4 text-nowrap border-b hover-border">
            Log In
          </div>
        </div>
      </div>
    </nav>
    <div className={"d-lg-none z-150 position-relative"+(props.activeDrop?" move-down": " move-up")}>
      <ul className="w-100 px-3 pb-1 position-absolute bg-white">
        <li className="border-bottom">
          Home
        </li>
        <li>
          Sign up
        </li>
        <li className="">
          Log in
        </li>
      </ul>
    </div>
  </div>
);

export default OnOff(withRouter(Navigation));