// rafce
// rfce
import HeaderComponent from "components/Header/Header.component";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <main>
        {/* đứng ở trang nào thì show nội dung trang đó ra đây */}
        <Outlet />
      </main>
      <footer>
        
      </footer>
    </>
  );
};

export default DefaultLayout;
