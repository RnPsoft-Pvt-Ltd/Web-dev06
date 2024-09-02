import './Members.css';
import { FaSearch } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { BsFillBoxFill } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import displayPic from './Images/displayPic.png'
function Members() {
      return <>
            <div className="container">
                  <div className="top">
                        <h1>Members</h1>
                        <button><FaSearch size={20}/></button>
                  </div>
                  <p id='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, soluta? Lorem ipsum dolor sit amet.</p>
                  <div className="innerBox">
                        <div className='date'>
                              <p>Monday, September 12</p>
                              <h1>Good Afternoon! <span>Karen A</span></h1>
                        </div>
                        <div className="twobox">
                              <div className='box'>
                                    <div>
                                          <h1>10</h1>
                                          <h3>Team Size</h3>
                                    </div>
                                    <h1 id='logo1'><BsFillBoxFill /></h1>
                              </div>
                              <div className='box'>
                                    <div>
                                          <h1>05</h1>
                                          <h3>Online / Active</h3>
                                    </div>
                                    <h1 id='logo2'><GoGraph /></h1>
                              </div>
                        </div>
                        <div className="inputs">
                              <div>
                                    <input type="text" placeholder='Invite people and teams' />
                                    <button>Send Invite</button>
                              </div>
                              <p><CiCircleInfo size={15}/> Add people and teams by name or email</p>
                        </div>
                        <div className="mainBox">
                              <div className='innermainBox'>
                                    <h1>Team Members</h1>
                                    <select name="" id="">
                                          <option value="January">January</option>
                                          <option value="January">February</option>
                                          <option value="January">March</option>
                                          <option value="January">April</option>
                                          <option value="January">May</option>
                                          <option value="January">June</option>
                                          <option value="January">July</option>
                                          <option value="January">August</option>
                                          <option value="January">September</option>
                                          <option value="January">October</option>
                                          <option value="January">Novemeber</option>
                                          <option value="January">December</option>
                                    </select>
                              </div>
                              <table>
                                    <thead>
                                          <tr>
                                                <th>Name</th>
                                                <th>Designation</th>
                                                <th>Date - Time</th>
                                                <th>Phone</th>
                                                <th>Status</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          <tr>
                                                <td id='name'><img src={displayPic} alt="" />Lorem Ipsum</td>
                                                <td>Lorem Ipsum</td>
                                                <td>12.09.2019-12.53 PM</td>
                                                <td>98754521456</td>
                                                <td><button>Online</button></td>
                                          </tr>
                                          <tr>
                                                <td id='name'><img src={displayPic} alt="" />Lorem Ipsum</td>
                                                <td>Lorem Ipsum</td>
                                                <td>12.09.2019-12.53 PM</td>
                                                <td>98754521456</td>
                                                <td><button>Online</button></td>
                                          </tr>
                                          <tr>
                                                <td id='name'><img src={displayPic} alt="" />Lorem Ipsum</td>
                                                <td>Lorem Ipsum</td>
                                                <td>12.09.2019-12.53 PM</td>
                                                <td>98754521456</td>
                                                <td><button>Online</button></td>
                                          </tr>
                                          <tr>
                                                <td id='name'><img src={displayPic} alt="" />Lorem Ipsum</td>
                                                <td>Lorem Ipsum</td>
                                                <td>12.09.2019-12.53 PM</td>
                                                <td>98754521456</td>
                                                <td><button>Online</button></td>
                                          </tr>
                                          <tr>
                                                <td id='name'><img src={displayPic} alt="" />Lorem Ipsum</td>
                                                <td>Lorem Ipsum</td>
                                                <td>12.09.2019-12.53 PM</td>
                                                <td>98754521456</td>
                                                <td><button>Online</button></td>
                                          </tr>
                                          <tr>
                                                <td id='name'><img src={displayPic} alt="" />Lorem Ipsum</td>
                                                <td>Lorem Ipsum</td>
                                                <td>12.09.2019-12.53 PM</td>
                                                <td>98754521456</td>
                                                <td><button>Online</button></td>
                                          </tr>
                                    </tbody>
                                    
                              </table>
                        </div>
                  </div>
            </div>
      </>
}
export default Members;