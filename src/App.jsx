import React from "react";
import Headers from "./Header";
import "./App.css";
import LeftSidebar from "./LeftSidebar";
import InnerSection from "./InnerSection";
import RightSidebar from "./RightSidebar";

const App = () => {
  return (
    <>
      <Headers />
      <div className="flex-wrap md:flex-nowrap app flex justify-center items-start">
        <LeftSidebar />
        <InnerSection />
        <RightSidebar />
      </div>

    </>
  );
};

export default App;