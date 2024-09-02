import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import ContactUs from './components/ContactUs';
import WhyAI from './components/WhyAI';
// import Features from "./components/Features"
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Features from './components/Features';
import Animation from './components/Animation';

function App() {
  return (
    <>
    <BrowserRouter>
    
    <div>
      <Routes>
        <Route exact path='/' element={<><Animation/></>}></Route>
        <Route exact path='/home' element={<><Navbar/><Home/><Features/><WhyAI/><Footer/></>}></Route>
        <Route exact path='/contact' element={<><Navbar/><ContactUs/><Footer/></>}></Route>
      </Routes>
    </div>
    {/* <Home/> */}
  {/* <ContactUs/> */}
    {/* <WhyAI/> */}
  
  {/* <Features/> */}
    </BrowserRouter>
    </>
  );
}

export default App;
