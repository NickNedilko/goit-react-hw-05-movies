import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<p>Loadind.....</p>}>
          <Outlet />
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={2000} />
        <ToastContainer />
      </main>
    </>
  );
};

export default Layout;
