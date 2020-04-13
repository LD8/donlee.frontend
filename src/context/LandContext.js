import React, { createContext, useReducer, useEffect } from "react";
import { AboutPage } from "../components/pages/AboutPage";
import { PortfolioPage } from "../components/pages/PortfolioPage";
import { BlogPage } from "../components/pages/BlogPage";
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
  const toggleLinks = (bool) =>
    dispatch({ type: "TOGGLE_LINKS", payload: bool });

  useEffect(() => {
    state.links.filter((i) => i.showPage === true).length > 0
      ? toggleLinks(true)
      : toggleLinks(false);
  }, [state.links]);

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
