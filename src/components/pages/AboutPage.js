import React from "react";
import { Skill } from "./Skill";
import "./AboutPage.css";

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
    <div className="skills">
      {skills.map((i,index) => (
        <Skill
          key={i.skill}
          pageText={"About"}
          skill={i.skill}
          percentage={i.percentage}
          index={index}
        />
      ))}
    </div>
  );
};
