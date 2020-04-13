import React, { useContext } from "react";
import "./Land.css";
import { LandLink } from "./components/LandLink";
import { Quote } from "./components/Quote";

import { GlobalContext, GlobalProvider } from "./context/GlobalContext";

export const Land = () => {
  const { links } = useContext(GlobalContext);
  return (
    <div className="container">
      <GlobalProvider>
        <div className="links">
          {links.map((link) => (
            <LandLink key={link.text} id={link.text} />
          ))}
        </div>
      </GlobalProvider>
      <Quote />
      <div className="bg-over"></div>
    </div>
  );
};
