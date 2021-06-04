import React from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider,
} from "react95";
import windowsLogo from "./Icons/logo.png";
import computercard from "./Icons/Computer Card.ico";

const WindowsStartBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <img
              src={windowsLogo}
              alt="react95 logo"
              style={{ height: "20px", marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <List
              style={{
                position: "absolute",
                left: "0",
                top: "100%",
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>
                <a href="https://github.com/wolffalexandria">
                  <img
                    src={computercard}
                    alt="green computer card"
                    style={{ paddingTop: 10 }}
                  />
                </a>
                <a href="https://github.com/wolffalexandria">GitHub</a>
              </ListItem>
              <ListItem>
                <span role="img" aria-label="📁">
                  📁
                </span>
                My account
              </ListItem>
              <Divider />
              <ListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </ListItem>
            </List>
          )}
        </div>
        <TextField placeholder="Search..." width={150} />
      </Toolbar>
    </AppBar>
  );
};

export default WindowsStartBar;
