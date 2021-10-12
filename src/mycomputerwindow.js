import React from "react";
import "./index.css";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Cutout,
  Panel,
} from "react95";
import CloseIcon from "./closeicon";
import folder from "./Icons/Folder.ico";
import MyComputer from "./mycomputericons";
import Draggable from "react-draggable";

const MyComputerWindow = ({
  isOpen,
  onCloseWindow,
  isActive,
  onFocusWindow,
}) => {
  return isOpen ? (
    <Draggable defaultPosition={{ x: 400, y: -300 }}>
      <Window
        style={{ zIndex: isActive ? 100 : 0 }}
        onClick={onFocusWindow}
        resizable
        className="window"
      >
        <WindowHeader className="window-header">
          <span>My Computer</span>
          <Button onClick={onCloseWindow}>
            <span className="close-icon">
              <CloseIcon />
            </span>
          </Button>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            File
          </Button>
          <Button variant="menu" size="sm" disabled>
            Edit
          </Button>
          <Button variant="menu" size="sm" disabled>
            View
          </Button>
          <Button variant="menu" size="sm" disabled>
            Help
          </Button>
        </Toolbar>
        <WindowContent>
          <Cutout className="window-content">
            <div className="my-computer">
              {content.map((file) => (
                <MyComputer
                  src={file.src}
                  altText={file.alt}
                  text={file.text}
                  href={file.href}
                  target={file.target}
                />
              ))}
            </div>
          </Cutout>
        </WindowContent>
        <Panel variant="well" className="footer">
          4 Object(s)
        </Panel>
      </Window>
    </Draggable>
  ) : null;
};
let content = [
  {
    src: folder,
    alt: "The original concept for the Jorden Law Firm website",
    text: "JordenLaw",
    href: "https://613bdb120003980007d11585--affectionate-torvalds-950325.netlify.app/",
    target: "_blank",
  },
  {
    src: folder,
    alt: "The original concept for the Jorden Law Firm website",
    text: "JordenLaw-Concept",
    href: "https://613bdb120003980007d11585--affectionate-torvalds-950325.netlify.app/",
    target: "_blank",
  },
  {
    src: folder,
    alt: "Leo's' Website aka my dog's site",
    text: "Leo's Site",
    href: "https://leothemaltipoo.netlify.app/",
    target: "_blank",
  },
  {
    src: folder,
    alt: "The first website I made",
    text: "FirstWebsite",
    href: "https://alex-wolff-firstwebsite.netlify.app/",
    target: "_blank",
  },
];

export default MyComputerWindow;
