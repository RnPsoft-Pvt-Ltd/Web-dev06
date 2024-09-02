import { useState } from "react";
import "./Header.css";
function Header({ adds }) {

      const [toggle, setToggle] = useState(true);

      return <>

            <div className="adds">
                  {adds.map((item, index) => <img key={index} src={item} />)}
            </div>

            <nav className="navbar">
                  <ul className={toggle ? "nav-links" : "nav-links active"}>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">LIVE TV</a></li>
                        <li><a href="#">STATE</a></li>
                        <li><a href="#">NATION</a></li>
                        <li><a href="#">WORLD</a></li>
                        <li><a href="#">BUSINESS</a></li>
                        <li><a href="#">SPORTS</a></li>
                        <li><a href="#">MORE</a></li>
                  </ul>
                  <input type="text" placeholder="Search..." />
                  <div className="toggle" onClick={() => setToggle(!toggle)}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                  </div>
            </nav>
            <div className="category">
                  <ul>
                        <li className="items"><a href="#">Latest</a></li>
                        <li className="items"><a href="#">IPL 2024</a></li>
                        <li className="items"><a href="#">Elections 2024</a></li>
                        <li className="items"><a href="#">Elections Turnout</a></li>
                        <li className="items"><a href="#">Board Results</a></li>
                        <li className="items"><a href="#">LifeStyle</a></li>
                        <li className="items"><a href="#">Movie Reviews</a></li>
                        <li className="items"><a href="#">Explainers</a></li>
                        <li className="items"><a href="#">Photos</a></li>
                        <li className="items"><a href="#">Sports</a></li>
                        <li className="items"><a href="#">Tech</a></li>
                        <li className="items"><a href="#">Auto</a></li>
                  </ul>
            </div>
      </>
}

export default Header;