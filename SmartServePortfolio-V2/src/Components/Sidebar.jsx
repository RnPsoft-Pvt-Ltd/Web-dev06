import React from "react";
import './Sidebar.css'
import { useNavigate } from "react-router-dom";


export default function Sidebar() {

  const navigate=useNavigate();

  return (
    <>
      <div className="sidebar-header hidden">
        <div className="Header-Rnp">
          <div className="logo">
            <span className="logo-text">#</span>
            <span className="logo-name">RnPsoft</span>
          </div>
        </div>
        <div className="menu sidebar">
          <div onClick={()=>navigate('/ticket')} className="menu-item">
            <i className="icon-ticket" />
            <span>Ticket</span>
          </div>
          <div onClick={()=>navigate('/members')} className="menu-item">
            <i className="icon-members" />
            <span>Members</span>
          </div>
          <div onClick={()=>navigate('/history')} className="menu-item">
            <i className="icon-history" />
            <span>History</span>
          </div>
        </div>
        <div className="settings sidebar">
          <div className="menu-item">
            <i className="icon-settings" />
            <span>Setting</span>
          </div>
          <div onClick={()=>navigate('/')} className="menu-item">
            <i className="icon-logout" />
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </>
  );
}
