import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const capitalize = (text) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

export default function Nav({ params }) {
  const { pathname } = useLocation();
  return (
    <SNav top={pathname === "/"}>
      <ul>
        {params.map(([param]) => (
          <li key={param}>
            <SNavLink to={pathname !== `/${param}` ? `/${param}` : "/"}>
              {capitalize(param)}
            </SNavLink>
          </li>
        ))}
      </ul>
    </SNav>
  );
}

const SNav = styled.nav`
  position: absolute;
  width: 100%;
  max-width: 1000px;
  height: 7vh;
  top: ${(props) => (props.top ? "40vh" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: all 0.5s ease;
  ul {
    width: 80%;
    height: 7vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 767px) {
      width: 100%;
      justify-content: space-between;
    }

    li {
      list-style: none;
      margin: 0 10px;
    }
  }
`;

const SNavLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-family: "Lobster", cursive;
  font-size: calc(2vmin + 20px);
  letter-spacing: 2px;
  color: var(--link-text-color);
  text-shadow: 0 5px 20px var(--text-shadow-color);
  transition: all 0.5s ease;
  :hover {
    font-size: calc(2vmin + 25px);
  }
`;
