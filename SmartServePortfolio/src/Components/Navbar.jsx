import { useEffect, useState } from "react";
import "./Navbar.css";
import gsap from "gsap";
function Navbar() {

      const [sidebarVisible, setSidebarVisible] = useState(false);

      const showSidebar = () => {
            setSidebarVisible(true);
      };

      const hideSidebar = () => {
            setSidebarVisible(false);
      };

      useEffect(() => {
            const t1 = gsap.timeline();

            t1.fromTo('#navbar',
                  {
                        y: '-100%',
                  },
                  {
                        y: '0%',
                        duration: 1.5
                  }
            )
      }, []);

      return <>
            <nav id="navbar">
                  <img src="Vector.png" alt="" />
                  <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
                        <li onClick={hideSidebar}>
                              <a href="#">
                                    <img style={{ height: "30px" }} src="close.png" alt="" />
                              </a>
                        </li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Members</a></li>
                        <li><a href="#" className='contactUsBtn' to="/contact">Contact Us</a></li>
                  </ul>
                  <ul>
                        <li className="hideOnMobile"><a href="#">Home</a></li>
                        <li className="hideOnMobile"><a href="#">FAQ's</a></li>
                        <li className="hideOnMobile"><a href="#">Reviews</a></li>
                        <li className="hideOnMobile"><a href="#">Members</a></li>
                        <li className="hideOnMobile"><a href="#" className='contactUsBtn'>Contact Us</a></li>
                        <li className="menu-button" onClick={showSidebar}>
                              <a href="#">
                                    <img src="menu.png" alt="" />
                              </a>
                        </li>
                  </ul>
            </nav>
      </>
}
export default Navbar;