import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import africque from '../images/africque.png';

const NavBar = () => {
  const detailsNav = <TiArrowBackOutline className="setBack" />;
  const header = 'Covid-19 Africa Tracker';
  const location = useLocation();
  const goBack = location.pathname.includes('country') ? detailsNav : '';

  return (
    <nav>
      <div className="firstnav">
        <NavLink exact="true" to={{ pathname: '/' }}>
          {goBack}
        </NavLink>
        <h1 className="firstheader">Covid-19 Data Centre</h1>
        <div className="navIcons">
          <BsMic />
          <AiOutlineSetting />
        </div>
      </div>
      <div className="secondnav">
        <img src={africque} alt="logo" className="logo" />
        <h1 className="sndheader">
          {header}
        </h1>
      </div>
    </nav>
  );
};

export default NavBar;
