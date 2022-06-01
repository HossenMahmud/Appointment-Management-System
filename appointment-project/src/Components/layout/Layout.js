import { useState } from 'react';
import { NavBar } from './NavBar';
import SideBar from './SideBar';
import { LayoutRoot } from '../../styles/MetarialStyles';
import { Outlet } from "react-router-dom";

export const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <NavBar sidebartoggle={() => setSidebarOpen(!isSidebarOpen)} />
      <SideBar
        onClose={() => setSidebarOpen(!isSidebarOpen)}
        open={isSidebarOpen}
      />
      <LayoutRoot>
        <Outlet />
      </LayoutRoot>
    </>
  );
};