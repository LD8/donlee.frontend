import React, { useState, useEffect, createContext } from "react";
import { APIBASE } from "../Const";

export const ApiContext = createContext();

export const ApiProfider = ({ children }) => {
  // const [tags, setTags] = useState(null);
  const [labels, setLabels] = useState(null);
  const [showcases, setShowcases] = useState(null);
  const [posts, setPosts] = useState(null);

  fetch(`${APIBASE}/posts/tags`).then((response) =>{response.json(); console.log(response.json())}
  ).then(data=>data);

  // useEffect(() => {
  //   fetch(`${APIBASE}/posts/tags`)
  //     .then((response) =>
  //       response.status > 400
  //         ? console.log(
  //             `Something went wrong fetching tags! Fetch Response ${response.status}`
  //           )
  //         : response.json()
  //     )
  //     .then((data) => {
  //       setTags(data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    fetch(`${APIBASE}/showcases/labels`)
      .then((response) =>
        response.status > 400
          ? console.log(
              `Something went wrong fetching labels! Fetch Response ${response.status}`
            )
          : response.json()
      )
      .then((data) => {
        setLabels(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`${APIBASE}/showcases/`)
      .then((response) =>
        response.status > 400
          ? console.log(
              `Something went wrong fetching showcases! Fetch Response ${response.status}`
            )
          : response.json()
      )
      .then((data) => {
        setShowcases(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(`${APIBASE}/posts`)
      .then((response) =>
        response.status > 400
          ? console.log(
              `Something went wrong fetching posts! Fetch Response ${response.status}`
            )
          : response.json()
      )
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ApiContext.Provider value={{ labels, showcases, posts }}>
      {children}
    </ApiContext.Provider>
  );
};
