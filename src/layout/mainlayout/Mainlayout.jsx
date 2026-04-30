// import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router';
import Navbar from '../../components/shared/navbar/Navbar';
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;