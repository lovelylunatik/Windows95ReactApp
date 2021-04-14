import React from "react";

function MyComputer({ src, altText, text }) {
  return (
    <div className="my-computer-content">
      <img src={src} alt={altText} />
      <span>{text}</span>
    </div>
  );
}

export default MyComputer;
