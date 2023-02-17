import React, { useState, useEffect } from "react";
import AdminNavBar from "../../../components/AdminDashboard/AdminNavBar";
import Dashboard from "../../../components/AdminDashboard/Dashboard";
import Orders from "../../../components/AdminDashboard/Orders";

const AdminDashboard = () => {
  const [currPage, setCurrPage] = useState("Dashboard");

  console.log(currPage);
  return (
    <AdminNavBar handlePageClick={setCurrPage}>
      {currPage === "Dashboard" ? (
        <Dashboard />
      ) : currPage === "Orders" ? (
        <Orders />
      ) : null}
    </AdminNavBar>
  );
};

export default AdminDashboard;
