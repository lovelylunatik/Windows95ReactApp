import React, { useState } from "react";
import "./index.css";
import Desktop from "./desktop";
import MyComputerWindow from "./mycomputerwindow";

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
    </>
  );
}

export default ClickableIcons;
