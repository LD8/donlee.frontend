import React, { useContext } from "react";
import { LandContext } from "../context/LandContext";

export const Quote = () => {
  const { anyLinkClicked } = useContext(LandContext);
  return !anyLinkClicked ? (
    <div className="quote">
      <p>
        " As one looked at that dead leaf with all its beauty and colour, maybe
        one would very deeply comprehend, be aware of, what one's own death must
        be, not at the very end but at the very beginning "
      </p>
      <p>- Krishnamurti -</p>
    </div>
  ) : null;
};
