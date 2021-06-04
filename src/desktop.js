import React from "react";
import myComputerIcon from "./Icons/computer.png";
import "./index.css";
import DesktopIcon from "./desktopicon";
import Notepad from "./Icons/Notepad.ico";

function Desktop({ handleClick }) {
  return (
    <div className="grid-container">
      {content.map((icon) => (
        <DesktopIcon
          handleClick={() => handleClick(icon.windowName, true)}
          src={icon.src}
          alt={icon.alt}
          text={icon.text}
        />
      ))}
    </div>
  );
}
let content = [
  {
    src: myComputerIcon,
    alt: "MyComputer Icon",
    text: "My Computer",
    windowName: "myComputer",
  },
  {
    src: Notepad,
    alt: "About Me",
    text: "About Me",
    windowName: "aboutMe",
  },
];
export default Desktop;
