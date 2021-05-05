import React, { useState } from "react";
import "./index.css";
import DesktopIcon from "./desktopicon";
import { MyComputerWindow } from "./mycomputerwindow";

function ClickableIcons() {
  const [isMyComputerOpen, setIsMyComputerOpen] = useState(false);
  return (
    <>
      <DesktopIcon handleClick={() => setIsMyComputerOpen(true)} />,
      <MyComputerWindow
        isOpen={isMyComputerOpen}
        onCloseWindow={() => setIsMyComputerOpen(false)}
      />
    </>
  );
}

export default ClickableIcons;
