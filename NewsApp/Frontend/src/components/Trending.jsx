import './Trending.css'
function Trending({ data }) {
      return <>

            <div className="trending-news-sidebar">
                  <h2>TRENDING NEWS_________</h2>
                  <ul>

                        {data.map((item, index) =>
                              <li key={index}>
                                    <a href="#">
                                          <img src={item.img} alt="News image" className="news-image" />
                                          <p>{item.desc}</p>
                                    </a>
                              </li>
                        )}

                        <button className="more-news-btn">More Latest <br /> News</button>
                  </ul>
            </div>
      </>
}
export default Trending;