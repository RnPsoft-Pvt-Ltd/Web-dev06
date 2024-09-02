import { useState } from 'react';
import './Sections.css';
import SectionsItem from './SectionsItem';
function Sections({data}) {

      
      const names=["Entertainment","Jobs","Education","Politics","Sports","Business","Health","Crime","Lifestyle","Technology","Science"];

     return <>
            <div className="sections">
                  <div className="title">
                        <div className="box"></div>
                        <h4>SECTIONS</h4>
                        <div className="pop">For You</div>
                  </div>
                  <div className="content">
                        <div className="left">
                              <ul>
                                    {names.map((item,index)=> <SectionsItem key={index} names={item}/>)}
                              </ul>
                        </div>
                        <div className="right">
                              {data.map((item,index)=>
                                    <div key={index} className="news">
                                          <img src={item.img} alt="News" />
                                          <div className="desc">
                                                <h6>{item.desc}</h6>
                                                <p>{item.country} <span>{item.date}</span></p>
                                          </div>
                                    </div>
                              )}
                              
                        </div>
                  </div>
            </div>
      </>
}
export default Sections;