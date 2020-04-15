import React, { useContext } from "react";
import "./AboutPage.css";
import { Skill } from "./Skill";
import { Icon } from "./Icon";
import { AnimateImage } from "./AnimateImage";
import { LandContext } from "../../context/LandContext";
import At from "../../assets/svg/At.svg";
import Github from "../../assets/svg/Github.svg";
import CV from "../../assets/svg/CV.svg";
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

const icons = [
  {
    source: At,
    altText: "Email address: Mail to Don Lee at don_lee@me.com",
  },
  { source: CV, altText: "CV/Resumé of Don Lee, click to view" },
  { source: Github, altText: "Github account of Don Lee" },
];

export const AboutPage = () => {
  const {
    links: [{ showPage }, ,],
  } = useContext(LandContext);
  // console.log(showPage);

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
          <p>Full-stack Software Developer</p>
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

      <section className="contact">
        {icons.map((i, index) => (
          <Icon
            key={index}
            showPage={showPage}
            imageSource={i.source}
            altText={i.altText}
            index={index}
          />
        ))}
      </section>
    </div>
  );
};
