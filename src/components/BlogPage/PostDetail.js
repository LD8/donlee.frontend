import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Tags } from "./Tags";
import { APIBASE } from "../Const";

export const PostDetail = () => {
  const { id: paramId } = useParams();
  const [post, setPost] = useState({});
  const [placeHolder, setPlaceHolder] = useState("Loading");
  const [loaded, setLoaded] = useState(false);
  const { title, tags, content, uploaded_date } = post;

  useEffect(() => {
    fetch(`${APIBASE}/posts/${paramId}`)
      .then((response) =>
        response.status > 400
          ? setPlaceHolder(
              `Something went wrong! Fetch Response ${response.status}`
            )
          : response.json()
      )
      .then((data) => {
        setPost(data);
        setLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [paramId]);

  return loaded ? (
    <SPostDetail>
      <h1>{title}</h1>
      <Tags tags={tags} />
      <p className="content">{content}</p>
      <p className="date">{uploaded_date}</p>
    </SPostDetail>
  ) : (
    <SPostDetail>{placeHolder}</SPostDetail>
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
