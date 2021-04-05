import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Everything JavaScript</span>
            </div>
            <div className="line">
              <span>Blog</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              Back to main Blog <RightArrow />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
