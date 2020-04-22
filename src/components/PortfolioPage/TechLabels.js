import React from "react";
import styled from "styled-components";
import { TechLabel } from "./TechLabel";

export const TechLabels = ({ labels, isClicked }) => {
  return (
    <STechLabels id="STechLabels">
      <ul>
        {labels
          ? labels.map((label, index) => (
              <TechLabel
                key={index}
                isClicked={isClicked}
                label={label}
                index={index}
              />
            ))
          : null}
      </ul>
      <a href="mailto:don_lee@me.com">
        <TechLabel
          key={"more"}
          isClicked={isClicked}
          label={"more..."}
          index={labels ? labels.length + 8 : 8}
        />
      </a>
    </STechLabels>
  );
};

const STechLabels = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  ul {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  li {
    list-style: none;
    width: 90px;
    height: 30px;
    padding-top: 6px;
    margin: 1px;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    font-size: 14px;
    border-radius: 3px;
    text-transform: uppercase;
    background-image: linear-gradient(
      180deg,
      rgba(70, 70, 70, 0.8),
      rgba(30, 30, 30, 0.9)
    );
  }

  a {
    text-decoration: none;
    transition: transform 0.4s ease;
    :hover {
      color: white;
      transform: scale(1.1);
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.564);
    }
  }
`;
