import React from "react";
import "./Land.css";
import { LandLink } from "./components/LandLink";

export const Land = () => {

  return (
    <div>
      <LandLink text={"ABOUT"}/>
      <LandLink text={"PORTFOLIO"}/>
      <LandLink text={"BLOG"}/>
    </div>
  )
}