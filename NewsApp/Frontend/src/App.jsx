import { useEffect, useState } from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Loading from './components/Loading';
import Home from './components/Home';
import OpenNews from './components/OpenNews';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [img,setImage]=useState('');
  const [desc,setDesc]=useState('');

  function changeOpenNews(image,description){
    setImage(image);
    setDesc(description);
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:3000/", { signal })
      .then((res) => res.json())
      .then(item => {
        setData(item);
        setLoading(false);
      })
      
      console.log(data);

    return () => {
      controller.abort();
    }

  }, [])

  return (
    <>
      {loading ? <Loading /> :
        <>
          <Header adds={data.adds.patner} />
            <Router basename="/">
              <Routes>
                <Route exact path="/" element={<Home data={data} changeOpenNews={changeOpenNews}/>}/>
                <Route exact path="/OpenNews" element={<OpenNews img={img} desc={desc} />}/>
              </Routes>
            </Router>
          <Footer social={data.social} />
        </>
      }
    </>
  )
}

export default App
