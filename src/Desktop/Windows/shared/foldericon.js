import React from "react";

function FolderIcon({ src, altText, text, href }) {
  return (
    <div>
      <a className="my-computer-content" href={href} target="_blank">
        <img src={src} alt={altText} />
        <span>{text}</span>
      </a>
    </div>
  );
}

export default FolderIcon;
