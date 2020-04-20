import React, { useContext } from "react";
import "./Land.css";
import { LandLink } from "./components/LandLink";
import { Quote } from "./components/Quote";
import { PageHandler } from "./components/PageHandler";
// import { AboutPage } from "./components/AboutPage/AboutPage";
// import { PortfolioPage } from "./components/PortfolioPage/PortfolioPage";
// import { BlogPage } from "./components/BlogPage/BlogPage";

import { LandContext, LandProvider } from "./context/LandContext";

import { BrowserRouter, Route, Switch } from "react-router-dom";
let rc=0
export const Land = () => {
  const { links } = useContext(LandContext);
  rc+=1
  console.log("Land Render Count:", rc)
  return ( 
    <LandProvider>
      <BrowserRouter>
        <div className="container">
          <div className="links">
            {links.map((link, index) => (
              <LandLink key={link.text} id={link.text} index={index} />
            ))}
          </div>
          <Quote />
          <Switch>
            {links.map((link, index) => (
              <Route
                exact
                path={`/${link.text.toLowerCase()}`}
                render={() => {
                  return <PageHandler index={index} />;
                }}
                key={index}
              />
            ))}
          </Switch>
          <div className="bg-over"></div>
        </div>
      </BrowserRouter>
    </LandProvider>
  );
};
