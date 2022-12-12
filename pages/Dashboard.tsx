import React from "react";
import ColumnChart from "../components/ColumnChart";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-5 bg-back-body">
        <Sidebar />
        <Content />
      </div>
    </>
  );
};

export default Dashboard;
