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
    fetch(`${APIBASE}/api/showcases/`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setShowcases(data);
      });
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


// import VA from "../../assets/showcase/VA.jpg";
// import metta from "../../assets/showcase/metta.jpg";
// import artist from "../../assets/showcase/artist.jpg";
// import budget from "../../assets/showcase/budget.jpg";
// import weather from "../../assets/showcase/weather.jpg";


// const showcases = [
//   {
//     id: "1",
//     name: "VA-boutique",
//     imgSource: VA,
//     altText: "an e-commerce website project",
//     labels: [
//       "WebApp",
//       "Python",
//       "Django",
//       "HTML5",
//       "JavaScript",
//       "CSS3",
//       "Bootstrap",
//     ],
//     brief:
//       "A brief about this project: Sky Go Desktop react javascript web application build on top of the Electron framework.",
//     about:
//       "A longer description of this prject: Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework. At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.",
//     techniques: [
//       "CSS5 - CSS something",
//       "Django - python backend frameork",
//       "HTML5",
//       "JS - ES6",
//     ],
//     resources: {
//       online: "http://va-boutique.com",
//       github: "http://github.com/ld8",
//       codesandbox: "https://codesandbox.io/s/react-budget-app-x5tg3",
//     },
//   },
//   {
//     id: "2",
//     name: "Metta Forum",
//     imgSource: metta,
//     altText:
//       "A mockup forum for practicing purposes. Use django to build a forum website",
//     labels: ["WebApp", "Python", "Django", "HTML5", "Bootstrap", "CSS3"],
//   },
//   {
//     id: "3",
//     name: "Artist Website",
//     imgSource: artist,
//     altText: "an artist's webstie built with Flask framework",
//   },
//   {
//     id: "4",
//     name: "Budget App",
//     imgSource: budget,
//     altText: "a budget app built with React.js",
//   },
//   {
//     id: "5",
//     name: "Weather App",
//     imgSource: weather,
//     altText: "a weather app built with React.js",
//   },
// ];