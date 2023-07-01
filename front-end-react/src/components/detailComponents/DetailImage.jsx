import React from "react";
import "./Details.css";
import "../homeComponents/Home.css";

const DetailImage = ({ image, title }) => {
  const backgroundString = `--background: url(${image})`;
  return (
    <div
      className="banner"
      style={{
        background: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)),
            url(${image})`,
      }}
    >
      <div className="ad_text">
        <h1 className="recipe-name">{title}</h1>
      </div>
    </div>
  );
};

export default DetailImage;
