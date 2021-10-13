import React from "react";
import {
  AppBar,
  Toolbar,
  // TextField,
  Button,
  List,
  ListItem,
  Divider,
} from "react95";
import windowsLogo from "../Icons/logo.png";
import computercard from "../Icons/ComputerCard.ico";
import blueDisk from "../Icons/Diskette.ico";
import bookdisk from "../Icons/BookDisc.ico";

const WindowsStartBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <AppBar style={{ position: "static" }}>
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
                <a
                  href="https://github.com/wolffalexandria"
                  alt="link to github"
                  target="_blank"
                >
                  <img
                    src={computercard}
                    alt="green computer card"
                    style={{ paddingTop: 10 }}
                  />
                  <span>GitHub</span>
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://codesandbox.io/u/alexandriawolff"
                  alt="CodeSandbox"
                  target="_blank"
                >
                  <img
                    src={blueDisk}
                    alt="blue computer floppy disk"
                    style={{ paddingRight: 5 }}
                  />
                  <span>CodeSandbox</span>
                </a>
              </ListItem>
              <ListItem>
                <a
                  href="https://www.canva.com/design/DAEFDzK-WrA/N92nyulYJOy9Ao2c3Gj4kg/view?utm_content=DAEFDzK-WrA&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  alt="Alex Wolff's Resume"
                  target="_blank"
                >
                  <img
                    src={bookdisk}
                    alt="open book with cd disc behind it"
                    style={{ paddingRight: 5 }}
                  />
                  <span>Resume</span>
                </a>
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
        {/* <TextField placeholder="Search..." width={150} /> */}
      </Toolbar>
    </AppBar>
  );
};

export default WindowsStartBar;
