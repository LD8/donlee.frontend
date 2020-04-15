import React from "react";
import "./Footer.css";
import { Icon } from "./Icon";
import At from "../assets/svg/At.svg";
import Github from "../assets/svg/Github.svg";
import CV from "../assets/svg/CV.svg";

const icons = [
  {
    source: At,
    altText: "Email address: Mail to Don Lee at don_lee@me.com",
    href: "mailto: don_lee@me.com",
  },
  {
    source: CV,
    altText: "CV/Resumé of Don Lee, click to view",
    href: "mailto: don_lee@me.com",
  },
  {
    source: Github,
    altText: "Github account of Don Lee",
    href: "mailto: don_lee@me.com",
  },
];

export const Footer = ({ showPage }) => {
  return (
    <footer className="page-footer">
      {icons.map((i, index) => (
        <Icon
          key={index}
          showPage={showPage}
          imageSource={i.source}
          altText={i.altText}
          index={index}
          href={i.href}
        />
      ))}
    </footer>
  );
};
