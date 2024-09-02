import Card from './Card';
import './Cards.css';
// import "bootstrap/dist/css/bootstrap.min.css"
function Cards({ item }) {

    let restItem = item.items.slice(1);

    return <>
        <div className="container-Cards">
            <div className="card">
                <div className="card-title">
                    <hr id="black-line" />
                    <h3 id="location">{item.title}</h3>
                    <hr />
                </div>
                <div className="card-header">
                    <img src={item.items[0].img} alt="" id="news-img" />
                </div>
                <div className="card-content">
                    <p className="news-title" id="news-title">{item.items[0].desc}</p>
                    <h6 className="news-source" id="news-source">{item.items[0].author} &#x2022; {item.items[0].date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-chat" viewBox="0 0 16 16" id="icon">
                            <path
                                d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                        </svg>0
                    </h6>
                    <p className="news-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Keonjhar: In a major breakthrough police today seized over Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>
                {restItem.map((i, index) => <Card key={index} data={i} />)}
            </div>
        </div>
    </>
}

export default Cards;