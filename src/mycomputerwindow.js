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
import drive from "./Icons/Drive.ico";
import diskdrive from "./Icons/Disc Drive.ico";
import controlsfolder from "./Icons/Controls Folder.ico";
import printersfolder from "./Icons/Printers folder.ico";
import MyComputer from "./mycomputer";

export const MyComputerWindow = () => (
  <Window resizable className="window">
    <WindowHeader className="window-header">
      <span>My Computer</span>
      <Button>
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
            <MyComputer src={file.src} altText={file.alt} text={file.text} />
          ))}
        </div>
      </Cutout>
    </WindowContent>
    <Panel variant="well" className="footer">
      4 Object(s)
    </Panel>
  </Window>
);
let content = [
  {
    src: drive,
    alt: "C Drive",
    text: "(C:) ",
  },
  {
    src: diskdrive,
    alt: "Disk Drive",
    text: "(D:)",
  },
  {
    src: controlsfolder,
    alt: "Control Panel Folder",
    text: "Control Panel",
  },
  {
    src: printersfolder,
    alt: "Printer Folder",
    text: "Printers",
  },
];
