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
  anyLinkClicked() {
    let result =
      this.links.filter((i) => i.showPage === true).length > 0 ? true : false;
    console.log(result);
    return result;
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
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
    <GlobalContext.Provider
      value={{
        anyLinkClicked: state.anyLinkClicked,
        links: state.links,
        togglePage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
