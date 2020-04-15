import React, { useContext } from "react";
import "./Land.css";
import { LandLink } from "./components/LandLink";
import { Quote } from "./components/Quote";

import { LandContext, LandProvider } from "./context/LandContext";

export const Land = () => {
  const { links } = useContext(LandContext);
  return (
    <LandProvider>
      <div className="container">

        <div className="links">
          {links.map((link, index) => (
            <LandLink key={link.text} id={link.text} index={index} />
          ))}
        </div>

        <Quote />

        <div className="bg-over"></div>
      </div>
    </LandProvider>
  );
};
