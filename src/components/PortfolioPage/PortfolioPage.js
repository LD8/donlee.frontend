import React from "react";
import styled from "styled-components";
import { Footer } from "../Footer";
import { Showcase } from "./Showcase";

import VA from "../../assets/showcase/VA.jpg";
import metta from "../../assets/showcase/metta.jpg";
import artist from "../../assets/showcase/artist.jpg";
import budget from "../../assets/showcase/budget.jpg";
import weather from "../../assets/showcase/weather.jpg";

const showcases = [
  {
    source: VA,
    altText: "an e-commerce website project",
    labels: [
      "WebApp",
      "Python",
      "Django",
      "HTML5",
      "JavaScript",
      "CSS3",
      "Bootstrap",
    ],
  },
  {
    source: metta,
    altText:
      "A mockup forum for practicing purposes. Use django to build a forum website",
    labels: ["WebApp", "Python", "Django", "HTML5", "Bootstrap", "CSS3"],
  },
  {
    source: artist,
    altText: "an artist's webstie built with Flask framework",
  },
  {
    source: budget,
    altText: "a budget app built with React.js",
  },
  {
    source: weather,
    altText: "a weather app built with React.js",
  },
];

export const PortfolioPage = () => {
  return (
    <>
      <SMyPortfolio id="SMyPortfolio">
        <section className="brief">
          <h3>
            From React.JS and UI/UX animations to Python and Django backend
            support. Check out my latest web software development portfolio
            projects.
          </h3>
        </section>

        <section className="showcase">
          {showcases.map((showcase, index) => (
            <Showcase
              key={index}
              imageSource={showcase.source}
              altText={showcase.altText}
              labels={showcase.labels}
            />
          ))}
        </section>
      </SMyPortfolio>

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
  .showcase {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
