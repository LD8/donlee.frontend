import React, { useState, useEffect, useContext } from "react";
import "./LandLink.css";
import { LandContext } from "../context/LandContext";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
let rc=0
export const LandLink = ({ id, index }) => {
  const { anyLinkClicked, togglePage, links } = useContext(LandContext);
  const { showPage } = links[index];
  const [linkStyle, setLinkStyle] = useState({});

  rc+=1
  console.log("Land Link Count:", rc)
  // spring animation when first appear
  const landLinkAppear = useSpring({
    from: { opacity: 0, transform: "translateY(-100px)" },
    opacity: 1,
    transform: "translateY(0px)",
    delay: (index + 1) * 300,
    config: { mass: 1, tension: 200, friction: 12 },
  });

  useEffect(() => {
    showPage && anyLinkClicked
      ? setLinkStyle({ top: "-43vh", color: "rgb(255, 255, 255)" })
      : anyLinkClicked
      ? setLinkStyle({ top: "-43vh", fontSize: "calc(2vmin + 12px)" })
      : setLinkStyle({});
  }, [showPage, anyLinkClicked]);

  return (
    <animated.div style={landLinkAppear}>
      <Link
        to={showPage ? `/` : `${id.toLowerCase()}`}
        className="land-link"
        id={id}
        onClick={() => togglePage(id)}
        style={linkStyle}
      >
        {id}
      </Link>
    </animated.div>
  );
};
