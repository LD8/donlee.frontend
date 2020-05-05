import React, { useState, useEffect, createContext } from "react";
import { APIBASE } from "../Const";

export const ApiContext = createContext();

export const ApiProfider = ({ children }) => {
  const [labels, setLabels] = useState(undefined);
  const [showcases, setShowcases] = useState(undefined);
  const [posts, setPosts] = useState(undefined);

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
