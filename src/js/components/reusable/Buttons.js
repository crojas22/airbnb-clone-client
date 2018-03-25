import React from 'react';
import { NavLink } from "react-router-dom";

export const BtnInput = ({title, classes, onClick, type, disabled, data}) => (
  <button type={type} className={'btn ' + classes} onClick={onClick} disabled={disabled} data-data={data}>
    {
      title
    }
  </button>
);
BtnInput.defaultProps = {
  type: 'button',
  disabled: false
};

export const BtnLink = ({title, classes, to, onClick}) => (
  <NavLink exact to={`/${to}`} className={'btn ' + classes} onClick={onClick}>
    {title}
  </NavLink>
);

export const BtnSubmit = ({title, classes}) => (
  <button type='submit' className={'btn ' + classes}>
    {title}
  </button>
);