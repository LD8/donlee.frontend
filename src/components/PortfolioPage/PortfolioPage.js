import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Footer } from "../Footer";
import { Showcase } from "./Showcase";
import { CaseDetail } from "./CaseDetail";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { APIBASE } from "../Const";

export const PortfolioPage = () => {
  const [showcases, setShowcases] = useState([]);
  const { path, url } = useRouteMatch();

  const fetchCases = () => {
    fetch(`${APIBASE}/showcases/`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setShowcases(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => fetchCases(), []);
  return (
    <>
      <Switch>
        <Route
          exact
          path={path}
          render={() => (
            <SMyPortfolio id="SMyPortfolio">
              <section className="brief">
                <h3>
                  From React.JS and UI/UX animations to Python and Django
                  backend support. Check out my latest web software development
                  portfolio projects.
                </h3>
              </section>

              <section className="showcases">
                {showcases.map((showcase) => (
                  <Showcase key={showcase.id} showcase={showcase} url={url} />
                ))}
              </section>
            </SMyPortfolio>
          )}
        />
        <Route
          exact
          path={`${path}/showcases/:id/:slug`}
          validate={(params) => Number.isInteger(params.id)}
          render={() => <CaseDetail />}
        />
      </Switch>

      <Footer />
    </>
  );
};

const SMyPortfolio = styled.div`
  max-width: 1000px;
  .brief {
    margin: 3vh 0 5vh 0;
    h3 {
      line-height: 30px;
      font-weight: 400;
      font-size: 25px;
      text-align: center;
      @media only screen and (max-width: 800px) {
        line-height: 25px;
        font-size: 20px;
      }
    }
  }
  .showcases {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;