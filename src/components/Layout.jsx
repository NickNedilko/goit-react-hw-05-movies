import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loadind.....</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
