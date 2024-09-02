import './App.css'
import EnrollmentPage from './components/EnrollmentPage'
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {

  return (
    <>
      <div className="container-fluid">
        <Router basename='/'>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/submit' element={<EnrollmentPage/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
