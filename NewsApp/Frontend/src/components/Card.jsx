import './Cards.css'
import "bootstrap/dist/css/bootstrap.min.css"
function Card({data}){
      return <>
            <ul className="list-group list-group-flush">
                    <li className="media">
                        <a className="pull-left" href="#">
                            <img  className="mr-3" src={data.img} alt="error" id="media-img"/>
                        </a>

                        <div className="media-body">
                            <p className="media-text">
                               {data.desc}
                            </p>
                            <p className="media-date">{data.date}</p>
                        </div>

                    </li>
            </ul>
      </>
}
export default Card;