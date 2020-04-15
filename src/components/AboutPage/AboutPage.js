import React from "react";
import "./AboutPage.css";
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

export const AboutPage = ({ showPage }) => {
  return (
    <div className="about-page">
      <section className="manifesto">
        <AnimateImage
          classes={"portrait"}
          showPage={showPage}
          imageSource={Portrait}
          altText={"my portrait"}
        />
        <div className="my-title">
          <h2>Don Lee</h2>
          <p>Full-stack Developer</p>
        </div>
        <p>
          Passionate in developing software and web apps that improve our lives
          both physically and mentally
        </p>
      </section>

      <section className="skills">
        {skills.map((i, index) => (
          <Skill
            key={i.skill}
            showPage={showPage}
            skill={i.skill}
            percentage={i.percentage}
            index={index}
          />
        ))}
      </section>

      <Footer showPage={showPage} />
    </div>
  );
};
