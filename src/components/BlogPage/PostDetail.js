import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Tags } from "./Tags";
import slugifyText from "../Utils.js";

export const PostDetail = ({ posts }) => {
  const { id, slug } = useParams();
  const { title, tags, content, uploaded_date } = posts.filter(
    (post) => post.id.toString() === id
  )[0];

  return slug === slugifyText(title) ? (
    <SPostDetail>
      <h1>{title}</h1>
      <Tags tags={tags} />
      <p className="content">{content}</p>
      <p className="date">{uploaded_date}</p>
    </SPostDetail>
  ) : (
    <SPostDetail>404 page</SPostDetail>
  );
};

const SPostDetail = styled.div`
  width: 90%;
  max-width: 800px;
  height: 100%;
  margin: 5vh auto;
  h1 {
    color: var(--title);
    font-family: "Lobster", cursive;
    font-weight: 200;
    margin-bottom: 2vh;
  }
  .content {
    margin: 2vh 0;
  }
  .date {
    font-size: 12px;
  }
`;
