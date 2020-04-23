import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import slugifyText from "../Utils.js";

export const CaseDetail = ({ showcases }) => {
  const { id: paramId, slug: paramSlug } = useParams();
  const {
    id,
    name,
    imgSource,
    altText,
    brief,
    about,
    techniques,
    resources,
  } = showcases.filter((showcase) => showcase.id === paramId)[0];
  return paramId === id && paramSlug === slugifyText(name) ? (
    <SCaseDetail>
      <div className="intro">
        <h1>{name}</h1>
        <p>{brief}</p>
        <figure>
          <img src={imgSource} alt={altText} />
          <figcaption>{altText}</figcaption>
        </figure>
      </div>
      <section className="about">
        <h2>About this project</h2>
        <p>{about}</p>
      </section>
      <section className="technical-sheet">
        <h2>Technical Sheet</h2>
        <ul>
          {techniques.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </section>
      <section className="resources">
        <h2>Resources</h2>
        <ul>
          {resources.online && (
            <li>
              <span>Visit the website:</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={resources.online}
              >
                {resources.online.toUpperCase()}
              </a>
            </li>
          )}
          {resources.github && (
            <li>
              <span>GitHub source files:</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={resources.github}
              >
                {resources.github.toUpperCase()}
              </a>
            </li>
          )}
          {resources.codesandbox && (
            <li>
              <span>Code-Sandbox:</span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={resources.codesandbox}
              >
                Portal Here
              </a>
            </li>
          )}
        </ul>
      </section>
    </SCaseDetail>
  ) : (
    <div>404 page</div>
  );
};

const SCaseDetail = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 20px;

  .intro {
    margin: 4vh 0;
    h1 {
      font-weight: 500;
      margin-bottom: 1vh;
    }
    p {
      margin-bottom: 2vh;
    }
    img {
      width: 100%;
    }
    figcaption {
      display: none;
    }
  }

  h2 {
    font-weight: 400;
    border-bottom: 1px solid grey;
    padding-bottom: 1vh;
    margin-bottom: 1vh;
  }

  section {
    margin-bottom: 4vh;
    line-height: 30px;
  }

  ul {
    margin: 0 20px;
    list-style: circle;
  }

  .resources {
    ul > li > span {
      width: 200px;
      padding-right: 20px;
    }
  }
`;
