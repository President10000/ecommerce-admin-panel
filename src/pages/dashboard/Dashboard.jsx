import React from "react";
import Cards from "../../components/Cards/Cards";
import "./dashboard.css";
import Table from "../../components/Table/Table";
// import { Flex } from "antd";

const Dashboard = () => {
  return (
    <div
      style={{
        marginTop: "1rem"
      }}
      className="MainDash"
    >
      <h2 className="">Dashboard</h2>
      {/* <Cards /> */}
      <Table />
    </div>
  );
};

export default Dashboard;
