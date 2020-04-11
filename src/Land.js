import React from "react";
import "./Land.css";
import { About } from "./components/About";

export const Land = () => {
  return (
    <div className="container">
      <div className="links">
        <About />
      </div>
      <div className="bg-over"></div>
    </div>
  );
};
