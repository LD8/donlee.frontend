import React from "react";
import styled from "styled-components";
import { Skill } from "./Skill";
import { Footer } from "../Footer";
import { AnimateImage } from "./AnimateImage";

import Portrait from "../../assets/img/portrait.png";

const skills = [
  { skill: "HTML", percentage: 90 },
  { skill: "CSS", percentage: 90 },
  { skill: "JavaScript", percentage: 70 },
  { skill: "React.js", percentage: 60 },
  { skill: "Python", percentage: 60 },
  { skill: "Django", percentage: 70 },
  { skill: "Flask", percentage: 50 },
  { skill: "Photoshop", percentage: 70 },
  { skill: "SketchUp", percentage: 90 },
  { skill: "AutoCAD", percentage: 90 },
];

export const AboutPage = () => {
  return (
    <>
      <SMyInfo id="SMyInfo">
        <section className="info-section">
          <AnimateImage
            classes={"portrait"}
            imageSource={Portrait}
            altText={"my portrait"}
          />
          <div className="my-info">
            <h2>Don Lee</h2>
            <h4>Full-stack Developer</h4>
            <p>
              Passionate in developing software that improves our lives both
              physically and mentally
            </p>
          </div>
        </section>

        <section className="skill-section">
          {skills.map((i, index) => (
            <Skill
              key={i.skill}
              skill={i.skill}
              percentage={i.percentage}
              index={index}
            />
          ))}
        </section>
      </SMyInfo>

      <Footer />
    </>
  );
};

const SMyInfo = styled.div`
  max-width: 1000px;
  .info-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    .my-info {
      text-align: center;
      text-justify: distribute;
      color: rgb(70, 70, 70);
      font-weight: 400;
      h2 {
        text-transform: uppercase;
        margin-bottom: 5px;
        font-size: calc(2vmin + 25px);
      }
      h4 {
        margin-bottom: 20px;
      }
    }
  }
  .skill-section {
    margin: 5vh 10px;
  }
`;
