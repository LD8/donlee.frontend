import React from "react";
import styled from "styled-components";
import { Footer } from "../Footer";
import { PostLi } from "./PostLi";
import { PostDetail } from "./PostDetail";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Post1",
    tags: ["React", "Deployment"],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    uploaded_date: "2020-04-23",
  },
  {
    id: 2,
    title: "Post2",
    tags: ["Django", "Notes"],
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    uploaded_date: "2020-04-23",
  },
  {
    id: 3,
    title: "Post3",
    tags: ["React", "Notes"],
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    uploaded_date: "2020-04-23",
  },
  {
    id: 4,
    title: "Post4",
    tags: ["Django", "REST", "Notes"],
    content:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    uploaded_date: "2020-04-23",
  },
  {
    id: 5,
    title: "Post5",
    tags: ["Daily Notes"],
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    uploaded_date: "2020-04-23",
  },
  {
    id: 6,
    title: "Post1 - React Deployment",
    tags: ["React", "Deployment"],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    uploaded_date: "2020-04-23",
  },
  {
    id: 7,
    title: "Post2",
    tags: ["Django", "Notes"],
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    uploaded_date: "2020-04-23",
  },
  {
    id: 8,
    title: "Post3",
    tags: ["React", "Notes"],
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    uploaded_date: "2020-04-23",
  },
  {
    id: 9,
    title: "Post4",
    tags: ["Django", "REST", "Notes"],
    content:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    uploaded_date: "2020-04-23",
  },
  {
    id: 10,
    title: "Post5",
    tags: ["Daily Notes"],
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    uploaded_date: "2020-04-23",
  },
];

export const BlogPage = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route
          exact
          path={path}
          render={() => (
            <SMyPosts id="SMyPosts">
              <section className="brief">
                <h3>
                  Post about my life and work... Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </h3>
              </section>

              <section className="posts">
                <ul>
                  {posts.map((post, index) => (
                    <PostLi key={index} post={post} url={url} />
                  ))}
                </ul>
              </section>
            </SMyPosts>
          )}
        />
        <Route
          exact
          path={`${path}/posts/:id/:slug`}
          validate={(params) => Number.isInteger(params.id)}
          render={() => <PostDetail posts={posts} />}
        />
      </Switch>
      <Footer />
    </>
  );
};

const SMyPosts = styled.div`
  max-width: 1000px;
  margin: 4vh 20px;
  .brief {
    margin-bottom: 4vh;
    h3 {
      line-height: 30px;
      font-weight: 400;
      font-size: 25px;
      text-align: center;
      @media only screen and (max-width: 800px) {
        line-height: 25px;
        font-size: 20px;
      }
    }
  }
  .posts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    ul {
      list-style: none;
    }
  }
`;
