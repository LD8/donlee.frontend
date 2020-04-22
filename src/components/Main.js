import React from "react";
import styled from "styled-components";
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

export default function Main({ params }) {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100%,0,0)" },
  });
  return (
    <SMain>
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={location}>
            <Route exact path="/" />
            {params.map((param) => (
              <Route
                key={param[0]}
                path={`/${param[0]}`}
                render={() => (
                  <SPageContainer>
                    <div className="scroll-page">{param[1]}</div>
                  </SPageContainer>
                )}
              />
            ))}
          </Switch>
        </animated.div>
      ))}
    </SMain>
  );
}

const SMain = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 5;
`;

const SPageContainer = styled.div`
  position: absolute;
  height: 93vh;
  width: 100vw;
  top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.9),
    rgba(238, 243, 231, 0.95)
  );
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 20px var(--bg-shadow-color);

  .scroll-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(61, 128, 30, 0.356);
      border-radius: 3px;
    }
  }
`;
