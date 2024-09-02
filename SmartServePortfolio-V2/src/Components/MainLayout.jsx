import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
