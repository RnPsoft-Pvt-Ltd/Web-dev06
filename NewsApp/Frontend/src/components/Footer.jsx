import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css"
function Footer({social}) {
      return <>
            <footer className="footer">
                  <div className="container">
                        <div className="row">
                              <div className="footer-col">
                                    <h4>News Channels</h4>
                                    <ul>
                                          <li><a href="#">Kalinga TV</a></li>
                                          <li><a href="#">Odisha Reporter</a></li>
                                          <li><a href="#">News</a></li>
                                          <li><a href="#">Videos</a></li>
                                          <li><a href="#">Photos</a></li>
                                    </ul>
                              </div>
                              <div className="footer-col">
                                    <h4>Quick Links</h4>
                                    <ul>
                                          <li><a href="#">About Us</a></li>
                                          <li><a href="#">FeedBack</a></li>
                                          <li><a href="#">Contact Us</a></li>
                                          <li><a href="#">Privacy Policy</a></li>
                                          <li><a href="#">Terms of Usage</a></li>
                                    </ul>
                              </div>
                              <div className="footer-col">
                                    <h4>Important Links</h4>
                                    <ul>
                                          <li><a href="#">FAQS</a></li>
                                          <li><a href="#">Redressal</a></li>
                                          <li><a href="#">RIO</a></li>
                                          <li><a href="#">Rate Card</a></li>
                                    </ul>
                              </div>
                              <div className="footer-col">
                                    <h4>Social Links</h4>
                                    <div className="social-links">
                                         {social.map((item,index)=> <img key={index} src={item.img}/>)}
                                    </div>
                              </div>
                        </div>
                  </div>
            </footer>
      </>
}
export default Footer;