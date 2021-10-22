import React, { useState, useRef } from "react";
import "../../../index.css";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Cutout,
  Panel,
} from "react95";
import CloseIcon from "../shared/closeicon";
import Draggable from "react-draggable";
import SnakeToolbar from "./snaketoolbar";
import Snake from "./snake.js";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from "./snakeconstants";

const SnakeGameWindow = ({
  isOpen,
  onCloseWindow,
  isActive,
  onFocusWindow,
}) => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const startGame = () => {
    canvasRef.current.focus();
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  };
  return isOpen ? (
    <Draggable defaultPosition={{ x: 400, y: -300 }}>
      <Window
        style={{ zIndex: isActive ? 100 : 0 }}
        onClick={onFocusWindow}
        resizable
        className="window"
      >
        <WindowHeader className="window-header">
          <span>Snake Game</span>
          <Button onClick={onCloseWindow}>
            <span className="close-icon">
              <CloseIcon />
            </span>
          </Button>
        </WindowHeader>
        <SnakeToolbar onClickStart={startGame} />
        <WindowContent>
          <Cutout className="window-content">
            <div>
              <Snake
                snake={snake}
                setSnake={setSnake}
                apple={apple}
                setApple={setApple}
                dir={dir}
                setDir={setDir}
                speed={speed}
                setSpeed={setSpeed}
                gameOver={gameOver}
                setGameOver={setGameOver}
                canvasRef={canvasRef}
              />
            </div>
          </Cutout>
        </WindowContent>
        <Panel variant="well" className="footer"></Panel>
      </Window>
    </Draggable>
  ) : null;
};

export default SnakeGameWindow;
