import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex justify-center items-center p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;