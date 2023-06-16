import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Typography } from "@mui/material";
import {
  AccountTree,
  AppRegistration,
  Home,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Login,
  Menu,
  Shield,
} from "@mui/icons-material";
import Link from "next/link";
import AuthContext from "../store/AuthContext";

export default function ResponsiveDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const authCtx = React.useContext(AuthContext);

  const [dropDown, setDropdown] = React.useState("");

  const navigationList = [
    { nav: "Home", link: "/", icon: <Home />, display: "always" },
    {
      nav: "Login",
      link: "/login",
      icon: <Login />,
      display: !authCtx.isLoggedIn,
    },
    {
      nav: "Signup",
      link: "/signup",
      icon: <AppRegistration />,
      display: !authCtx.isLoggedIn,
    },
    {
      type: "dropdown",
      nav: "Account",
      link: "/dashboard",
      icon: <AccountTree />,
      display: authCtx.isLoggedIn,
      subLinks: [
        { nav: "Dashboard", link: "/dashboard" },
        { nav: "All Users", link: "/dashboard/allusers" },
        { nav: "All Conferences", link: "/dashboard/all-conferences" },
        { nav: "Add Conference", link: "/dashboard/add-conference" },
        { nav: "Personal Details", link: "/dashboard/personal_details" },
      ],
    },
    {
      nav: "Verification",
      link: "/verification",
      icon: <Shield />,
      display: authCtx.isLoggedIn,
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 280 }}
      role="presentation"
    >
      <List>
        {navigationList.map((navigate) => (
          <>
            {navigate.display === "always" ? (
              <>
                {navigate.type && navigate.type === "dropdown" ? (
                  <>
                    <ListItem key={navigate.nav} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          if (dropDown !== navigate.nav)
                            setDropdown(navigate.nav);
                          else setDropdown("");
                        }}
                      >
                        <ListItemIcon>
                          {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                          {navigate.icon}
                        </ListItemIcon>
                        <ListItemText primary={navigate.nav} />
                        {dropDown === navigate.nav ? (
                          <KeyboardArrowUp />
                        ) : (
                          <KeyboardArrowDown />
                        )}
                      </ListItemButton>
                    </ListItem>
                    <div className="flex flex-col">
                      {dropDown === navigate.nav ? (
                        <>
                          {navigate.subLinks.map((subItem) => (
                            <Link
                              href={subItem.link}
                              className="px-20 p-2 hover:bg-blue-100 w-full"
                            >
                              {subItem.nav}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </>
                ) : (
                  <ListItem
                    key={navigate.nav}
                    disablePadding
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                  >
                    <ListItemButton href={navigate.link}>
                      <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        {navigate.icon}
                      </ListItemIcon>
                      <ListItemText primary={navigate.nav} />
                    </ListItemButton>
                  </ListItem>
                )}
              </>
            ) : navigate.display ? (
              <>
                {navigate.type && navigate.type === "dropdown" ? (
                  <>
                    <ListItem key={navigate.nav} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          if (dropDown !== navigate.nav)
                            setDropdown(navigate.nav);
                          else setDropdown("");
                        }}
                      >
                        <ListItemIcon>
                          {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                          {navigate.icon}
                        </ListItemIcon>
                        <ListItemText primary={navigate.nav} />
                        {dropDown === navigate.nav ? (
                          <KeyboardArrowUp />
                        ) : (
                          <KeyboardArrowDown />
                        )}
                      </ListItemButton>
                    </ListItem>
                    <div className="flex flex-col">
                      {dropDown === navigate.nav ? (
                        <>
                          {navigate.subLinks.map((subItem) => (
                            <Link
                              href={subItem.link}
                              className="px-20 p-2 hover:bg-blue-100 w-full"
                            >
                              {subItem.nav}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </>
                ) : (
                  <ListItem
                    key={navigate.nav}
                    disablePadding
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                  >
                    <ListItemButton href={navigate.link}>
                      <ListItemIcon>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        {navigate.icon}
                      </ListItemIcon>
                      <ListItemText primary={navigate.nav} />
                    </ListItemButton>
                  </ListItem>
                )}
              </>
            ) : (
              <></>
            )}
          </>
        ))}
      </List>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div className="p-2 bg-slate-100 text-black">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="flex justify-between items-center h-12">
            <Typography variant="body2">RESEARCH</Typography>
            <div className="hidden md:flex gap-4">
              {navigationList.map((item) => (
                <>
                  {!item.type ? (
                    <>
                      <Link className="hover:underline" href={item.link}>
                        {item.nav.toUpperCase()}
                      </Link>
                    </>
                  ) : (
                    <>
                      <div className="group/parent">
                        <button className="flex group/item">
                          <div>ACCOUNT</div>
                          <KeyboardArrowDown />
                        </button>
                        <div className="hidden absolute group-hover/parent:flex flex-col gap-1 rounded-sm overflow-hidden bg-blue-50 w-36">
                          {item.subLinks.map((subItem) => (
                            <Link
                              href={subItem.link}
                              className="p-2 hover:bg-blue-100 w-full"
                            >
                              {subItem.nav}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </>
              ))}
            </div>
            <div className="flex md:hidden">
              <IconButton onClick={toggleDrawer(anchor, true)}>
                <Menu fontSize="large" />
              </IconButton>
            </div>
          </div>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
