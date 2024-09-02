import { Link } from 'react-router-dom';
import './Top.css';
function Top({ data, changeOpenNews }) {
      const restData = data.slice(3, 17);
      return <>
            <div className="container1">
                  <Link to='/OpenNews' onClick={() => changeOpenNews(data[0].img, data[0].desc)}>
                        <div className="first">
                              <div>
                                    <img src={data[0].img} alt="" />
                              </div>
                              <h6>{data[0].desc}</h6>
                        </div>
                  </Link>
                  <div className="second">
                        <Link to='/OpenNews' onClick={() => changeOpenNews(data[2].img, data[2].desc)}>
                              <div className='inside'>
                                    <div>
                                          <img src={data[2].img} alt="" />
                                    </div>
                                    <h5>{data[2].desc}</h5>
                              </div>
                        </Link>
                        <Link to='/OpenNews' onClick={() => changeOpenNews(data[1].img, data[1].desc)}>
                              <div className='inside'>
                                    <div>
                                          <img src={data[1].img} alt="" />
                                    </div>
                                    <h5>{data[1].desc}</h5>
                              </div>
                        </Link>
                  </div>
                  {restData.map((item, index) =>
                   <Link key={index} to='/OpenNews' onClick={() => changeOpenNews(item.img, item.desc)}>
                        <div  className='all'>
                              <h5>{item.desc}</h5>
                              <img src={item.img} alt="Error" />
                        </div>
                  </Link>
                  )}
            </div>
      </>
}
export default Top;