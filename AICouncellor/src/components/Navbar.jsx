import React, { useState } from 'react';
import './Navbar.css';
import logo from "./Images/logo.png"
import menu from "./Images/menu.png"
import close from "./Images/close.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <nav>
      <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <li onClick={hideSidebar}>
          <Link to="/home">
            <img style={{height:"30px"}} src={close} alt="" />
          </Link>
        </li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/home">Features</Link></li>
        <li><Link to="/home">WhyAI</Link></li>
        <li><Link className='contactUsBtn' to="/contact">Contact Us</Link></li>
      </ul>
      <ul>
        <li><Link to="/"><img src={logo} alt="" /></Link></li>
        <li className="hideOnMobile"><Link to="/home">Home</Link></li>
        <li className="hideOnMobile"><Link to="/home">Features</Link></li>
        <li className="hideOnMobile"><Link to="/home" >WhyAI</Link></li>
        <li className="hideOnMobile"><Link className='contactUsBtn' to="/contact">Contact Us</Link></li>
        <li className="menu-button" onClick={showSidebar}>
          <Link to="/home">
            <img src={menu} alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
