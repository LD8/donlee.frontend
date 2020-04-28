import React from "react";
import styled from "styled-components";
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
    altText: "CV",
    href: "mailto: don_lee@me.com",
  },
  {
    source: Github,
    altText: "Github account of Don Lee",
    href: "https://github.com/LD8",
  },
];

export const Footer = () => {
  return (
    <SFooter id="SFooter">
      {icons.map((i, index) => (
        <Icon
          key={index}
          imageSource={i.source}
          altText={i.altText}
          index={index}
          href={i.href}
        />
      ))}
    </SFooter>
  );
};

const SFooter = styled.footer`
  position: sticky;
  top: 100%;
  width: 100%;
  height: 15vh;
  min-height: 170px;
  max-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color:rgb(220, 225, 200); */
  background-image: linear-gradient(
    90deg,
    rgb(40, 46, 41),
    rgba(140, 143, 141, 0.8),
    rgb(40, 46, 41)
  );

  a {
    margin: 0 calc(1vw + 20px);
    padding: 0;

    img {
      height: 40px;
      @media only screen and (max-width: 800px) {
        height: 35px;
      }
    }
  }
`;
