import React, { createContext, useReducer } from "react";
import { AboutPage } from "../components/AboutPage/AboutPage";
import { PortfolioPage } from "../components/PortfolioPage/PortfolioPage";
import { BlogPage } from "../components/BlogPage/BlogPage";
import LandReducer from "./LandReducer";

const initialState = {
  links: [
    { text: "About", children: <AboutPage />, showPage: false },
    { text: "Portfolio", children: <PortfolioPage />, showPage: false },
    { text: "Blog", children: <BlogPage />, showPage: false },
  ],
  anyLinkClicked: false,
};

export const LandContext = createContext(initialState);

export const LandProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LandReducer, initialState);

  const togglePage = (id) => dispatch({ type: "TOGGLE_PAGE", payload: id });

  return (
    <LandContext.Provider
      value={{
        anyLinkClicked: state.anyLinkClicked,
        links: state.links,
        togglePage,
      }}
    >
      {children}
    </LandContext.Provider>
  );
};
