import React from 'react'
import Sidebar from './Sidebar';
import {Outlet} from "react-router-dom";
const DashboardSummary = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default DashboardSummary
