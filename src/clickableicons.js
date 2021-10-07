import React, { useState } from "react";
import "./index.css";
import Desktop from "./desktop";
import MyComputerWindow from "./mycomputerwindow";
import AboutMeWindow from "./aboutmewindow";
import SnakeGameWindow from "./snakegamewindow";

function ClickableIcons() {
  const [windowStates, setWindowStates] = useState({
    myComputer: false,
    paint: true,
  });

  const [activeWindow, setActiveWindow] = useState("");

  const updateWindowState = (windowName, isOpen) => {
    return setWindowStates({ ...windowStates, [windowName]: isOpen });
  };

  return (
    <>
      <Desktop handleClick={updateWindowState} />,
      <MyComputerWindow
        isOpen={windowStates.myComputer}
        onCloseWindow={() => updateWindowState("myComputer", false)}
        isActive={activeWindow === "myComputer"}
        onFocusWindow={() => setActiveWindow("myComputer")}
      />
      <AboutMeWindow
        isOpen={windowStates.aboutMe}
        onCloseWindow={() => updateWindowState("aboutMe", false)}
        isActive={activeWindow === "aboutMe"}
        onFocusWindow={() => setActiveWindow("aboutMe")}
      />
      <SnakeGameWindow
        isOpen={windowStates.snakeGame}
        onCloseWindow={() => updateWindowState("snakeGame", false)}
        isActive={activeWindow === "snakeGame"}
        onFocusWindow={() => setActiveWindow("snakeGame")}
      />
    </>
  );
}

export default ClickableIcons;
