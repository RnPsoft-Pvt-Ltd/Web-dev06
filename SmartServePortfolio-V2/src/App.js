import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Components/MainLayout';
import History from './Components/History';
import Login from './Components/login';
import Members from './Components/Members';
import Ticket from './Components/Ticket';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path='/ticket' element={<Ticket />} />
            <Route path='/members' element={<Members />} />
            <Route path='/history' element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
