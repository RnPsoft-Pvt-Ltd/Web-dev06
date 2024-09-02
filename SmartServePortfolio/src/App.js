import './App.css';
import Home from './Components/Home';
import FAQ from './Components/FAQ';
import Form from './Components/Form';
import Benifits from './Components/Benifits';
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <Benifits/>
      <FAQ/>
      <Form/>
    </div>
    </>
  );
}

export default App;
