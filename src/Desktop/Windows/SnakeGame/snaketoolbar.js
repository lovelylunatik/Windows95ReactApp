import React from "react";
import "../../../index.css";
import { Toolbar, Button, List, ListItem } from "react95";

const SnakeToolbar = ({ onClickStart }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Toolbar>
      <Button
        onClick={() => setOpen(!open)}
        active={open}
        variant="menu"
        size="sm"
      >
        File
      </Button>
      {open && (
        <List
          style={{
            position: "absolute",
            left: "0",
            top: "100%",
            zIndex: 2,
          }}
          onClick={() => setOpen(false)}
        >
          <ListItem>
            <span onClick={onClickStart}>Start Game</span>
          </ListItem>
        </List>
      )}
      {/* <Button
        onClick={() => setOpen(!open)}
        active={open}
        variant="menu"
        size="sm"
      >
        Options
      </Button> */}
      {/* {open && (
        <List
          style={{
            position: "absolute",
            left: "0",
            top: "100%",
            zIndex: "2",
          }}
          onClick={() => setOpen(false)}
        >
          <ListItem>
            <span>Snake Color</span>
          </ListItem>
        </List>
      )} */}
    </Toolbar>
  );
};

export default SnakeToolbar;
