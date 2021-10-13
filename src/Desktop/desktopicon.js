import React from "react";
import "../index.css";

function DesktopIcon({ src, alt, text, handleClick }) {
  return (
    <div className="icons" onClick={handleClick}>
      <img src={src} alt={alt} className="computericon" />
      <span>{text}</span>
    </div>
  );
}

export default DesktopIcon;
