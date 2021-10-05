import React from "react";
import "./index.css";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Cutout,
  Panel,
} from "react95";
import CloseIcon from "./closeicon";
import Draggable from "react-draggable";
import SnakeToolbar from "./snaketoolbar";
import Snake from "./snake.js";

const SnakeGameWindow = ({ isOpen, onCloseWindow }) => {
  return isOpen ? (
    <Draggable defaultPosition={{ x: 400, y: -300 }}>
      <Window resizable className="window">
        <WindowHeader className="window-header">
          <span>Snake Game</span>
          <Button onClick={onCloseWindow}>
            <span className="close-icon">
              <CloseIcon />
            </span>
          </Button>
        </WindowHeader>
        <SnakeToolbar />
        <WindowContent>
          <Cutout className="window-content">
            <div>
              <Snake />
            </div>
          </Cutout>
        </WindowContent>
        <Panel variant="well" className="footer"></Panel>
      </Window>
    </Draggable>
  ) : null;
};

export default SnakeGameWindow;
