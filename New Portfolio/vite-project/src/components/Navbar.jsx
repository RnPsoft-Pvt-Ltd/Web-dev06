import { useState } from "react";
import "./Navbar.css";
function Navbar() {

      const [sidebarVisible, setSidebarVisible] = useState(false);

      const showSidebar = () => {
            setSidebarVisible(true);
      };

      const hideSidebar = () => {
            setSidebarVisible(false);
      };

      return <>
            <nav>
                  <img src="Vector.png" alt="" />
                  <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
                        <li onClick={hideSidebar}>
                              <a>
                                    <img style={{ height: "30px" }} src="close.png" alt="" />
                              </a>
                        </li>
                        <li><a>Home</a></li>
                        <li><a>FAQ's</a></li>
                        <li><a>Reviews</a></li>
                        <li><a>Members</a></li>
                        <li><a className='contactUsBtn' to="/contact">Contact Us</a></li>
                  </ul>
                  <ul>
                        <li className="hideOnMobile"><a>Home</a></li>
                        <li className="hideOnMobile"><a>FAQ's</a></li>
                        <li className="hideOnMobile"><a>Reviews</a></li>
                        <li className="hideOnMobile"><a>Members</a></li>
                        <li className="hideOnMobile"><a className='contactUsBtn'>Contact Us</a></li>
                        <li className="menu-button" onClick={showSidebar}>
                              <a>
                                    <img src="menu.png" alt="" />
                              </a>
                        </li>
                  </ul>
            </nav>
      </>
}
export default Navbar;