import React from "react";
import "./index.css";
import { Window, WindowHeader, Button, Toolbar, Cutout, Panel } from "react95";
import CloseIcon from "./closeicon";
import Draggable from "react-draggable";
import aboutMe from "./aboutmebio";

const AboutMeWindow = ({ isOpen, onCloseWindow }) => {
  return isOpen ? (
    <Draggable>
      <Window resizable className="window">
        <WindowHeader className="window-header">
          <span>About Me</span>
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
            Insert
          </Button>
          <Button variant="menu" size="sm" disabled>
            Format
          </Button>
          <Button variant="menu" size="sm" disabled>
            Help
          </Button>
        </Toolbar>
        <Cutout className="window-content-bio">
          <div className="aboutme">
            <p>{aboutMe}</p>
          </div>
        </Cutout>
        <Panel variant="well" className="footer">
          4 Object(s)
        </Panel>
      </Window>
    </Draggable>
  ) : null;
};

export default AboutMeWindow;