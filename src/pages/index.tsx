import Footer from "@magicui/layouts/footer ";
import Header from "@magicui/layouts/header ";
import React from "react";
import LineGraph from "./components/LineGraph";
import BarGraph from "./components/BarGraph";
import PieChart from "./components/PieChart";
import DoughnutGraph from "./components/DoughnutGraph";

const index = () => {
  return (
    <div>
      <Header />
      <main style={{ backgroundColor: "white" }}>
        <LineGraph/>
        <BarGraph/>
        <PieChart/>
        <DoughnutGraph/>
      </main>
      <Footer />
    </div>
  );
};

export default index;