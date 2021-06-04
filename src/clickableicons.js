import React, { useState } from "react";
import "./index.css";
import Desktop from "./desktop";
import MyComputerWindow from "./mycomputerwindow";
import AboutMeWindow from "./aboutmewindow";

function ClickableIcons() {
  const [windowStates, setWindowStates] = useState({
    myComputer: false,
    paint: true,
  });

  const updateWindowState = (windowName, isOpen) => {
    return setWindowStates({ ...windowStates, [windowName]: isOpen });
  };

  return (
    <>
      <Desktop handleClick={updateWindowState} />,
      <MyComputerWindow
        isOpen={windowStates.myComputer}
        onCloseWindow={() => updateWindowState("myComputer", false)}
      />
      <AboutMeWindow
        isOpen={windowStates.aboutMe}
        onCloseWindow={() => updateWindowState("aboutMe", false)}
      />
    </>
  );
}

export default ClickableIcons;
