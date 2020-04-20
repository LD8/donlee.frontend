import React from "react";
import "./BlogPage.css";
import { Footer } from "../Footer";

export const BlogPage = ({ showPage }) => {
  return (
    <div>
      <Footer showPage={showPage} />
    </div>
  );
};
