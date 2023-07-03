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
  Dashboard,
  Grade,
  Home,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Login,
  Logout,
  ManageAccounts,
  Menu,
  People,
  Security,
  Shield,
  VideoCall,
  Videocam,
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
        { nav: "Personal Details", link: "/dashboard/personal-details" },
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
        {/* {navigationList.map((navigate) => ( */}
        {/* <> */}
        {/* {navigate.display === "always" ? ( */}
        {/* <> */}
        {/* {navigate.type && navigate.type === "dropdown" ? ( */}
        {/* <> */}
        {/* <ListItem key={navigate.nav} disablePadding> */}
        {/* <ListItemButton */}
        {/* onClick={() => { */}
        {/* if (dropDown !== navigate.nav) */}
        {/* setDropdown(navigate.nav); */}
        {/* else setDropdown(""); */}
        {/* }} */}
        {/* > */}
        {/* <ListItemIcon> */}
        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
        {/* {navigate.icon} */}
        {/* </ListItemIcon> */}
        {/* <ListItemText primary={navigate.nav} /> */}
        {/* {dropDown === navigate.nav ? ( */}
        {/* <KeyboardArrowUp /> */}
        {/* ) : ( */}
        {/* <KeyboardArrowDown /> */}
        {/* )} */}
        {/* </ListItemButton> */}
        {/* </ListItem> */}
        {/* <div className="flex flex-col"> */}
        {/* {dropDown === navigate.nav ? ( */}
        {/* <> */}
        {/* {navigate.subLinks.map((subItem) => ( */}
        {/* <Link */}
        {/* href={subItem.link} */}
        {/* className="px-20 p-2 hover:bg-blue-100 w-full" */}
        {/* > */}
        {/* {subItem.nav} */}
        {/* </Link> */}
        {/* ))} */}
        {/* </> */}
        {/* ) : ( */}
        {/* <></> */}
        {/* )} */}
        {/* </div> */}
        {/* </> */}
        {/* ) : ( */}
        {/* <ListItem */}
        {/* key={navigate.nav} */}
        {/* disablePadding */}
        {/* onClick={toggleDrawer(anchor, false)} */}
        {/* onKeyDown={toggleDrawer(anchor, false)} */}
        {/* > */}
        {/* <ListItemButton href={navigate.link}> */}
        {/* <ListItemIcon> */}
        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
        {/* {navigate.icon} */}
        {/* </ListItemIcon> */}
        {/* <ListItemText primary={navigate.nav} /> */}
        {/* </ListItemButton> */}
        {/* </ListItem> */}
        {/* )} */}
        {/* </> */}
        {/* ) : navigate.display ? ( */}
        {/* <> */}
        {/* {navigate.type && navigate.type === "dropdown" ? ( */}
        {/* <> */}
        {/* <ListItem key={navigate.nav} disablePadding> */}
        {/* <ListItemButton */}
        {/* onClick={() => { */}
        {/* if (dropDown !== navigate.nav) */}
        {/* setDropdown(navigate.nav); */}
        {/* else setDropdown(""); */}
        {/* }} */}
        {/* > */}
        {/* <ListItemIcon> */}
        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
        {/* {navigate.icon} */}
        {/* </ListItemIcon> */}
        {/* <ListItemText primary={navigate.nav} /> */}
        {/* {dropDown === navigate.nav ? ( */}
        {/* <KeyboardArrowUp /> */}
        {/* ) : ( */}
        {/* <KeyboardArrowDown /> */}
        {/* )} */}
        {/* </ListItemButton> */}
        {/* </ListItem> */}
        {/* <div className="flex flex-col"> */}
        {/* {dropDown === navigate.nav ? ( */}
        {/* <> */}
        {/* {navigate.subLinks.map((subItem) => ( */}
        {/* <Link */}
        {/* href={subItem.link} */}
        {/* className="px-20 p-2 hover:bg-blue-100 w-full" */}
        {/* > */}
        {/* {subItem.nav} */}
        {/* </Link> */}
        {/* ))} */}
        {/* </> */}
        {/* ) : ( */}
        {/* <></> */}
        {/* )} */}
        {/* </div> */}
        {/* </> */}
        {/* ) : ( */}
        {/* <ListItem */}
        {/* key={navigate.nav} */}
        {/* disablePadding */}
        {/* onClick={toggleDrawer(anchor, false)} */}
        {/* onKeyDown={toggleDrawer(anchor, false)} */}
        {/* > */}
        {/* <ListItemButton href={navigate.link}> */}
        {/* <ListItemIcon> */}
        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
        {/* {navigate.icon} */}
        {/* </ListItemIcon> */}
        {/* <ListItemText primary={navigate.nav} /> */}
        {/* </ListItemButton> */}
        {/* </ListItem> */}
        {/* )} */}
        {/* </> */}
        {/* ) : ( */}
        {/* <></> */}
        {/* )} */}
        {/* </> */}
        {/* ))} */}
        <ListItem>
          <ListItemButton href="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="HOME" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton href="/all-faculty">
            <ListItemIcon>
              <Grade/>
            </ListItemIcon>
            <ListItemText primary="All Faculty" />
          </ListItemButton>
        </ListItem>
        {authCtx.isLoggedIn ? (
          <>
            <ListItem>
              <ListItemButton
                onClick={() => {
                  if (dropDown === "") setDropdown("account");
                  else setDropdown("");
                }}
              >
                <ListItemIcon>
                  <AccountTree />
                </ListItemIcon>
                <ListItemText primary="ACCOUNT" />
                {dropDown === "account" ? (
                  <KeyboardArrowUp />
                ) : (
                  <KeyboardArrowDown />
                )}
              </ListItemButton>
            </ListItem>
            {dropDown === "account" ? (
              <div className="bg-white mx-5 px-4">
                <div>
                  <ListItemButton href="/dashboard">
                    <ListItemIcon>
                      <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </div>
                <div>
                  <ListItemButton href="/dashboard/all-users">
                    <ListItemIcon>
                      <People />
                    </ListItemIcon>
                    <ListItemText primary="All Users" />
                  </ListItemButton>
                </div>
                <div >
                  <ListItemButton href="/dashboard/all-conference">
                    <ListItemIcon>
                      <Videocam />
                    </ListItemIcon>
                    <ListItemText primary="All Conferences" />
                  </ListItemButton>
                </div>
                <div >
                  <ListItemButton href="/dashboard/add-conference">
                    <ListItemIcon>
                      <VideoCall />
                    </ListItemIcon>
                    <ListItemText primary="Add Conference" />
                  </ListItemButton>
                </div>
                <div >
                  <ListItemButton href="/dashboard/personal-details">
                    <ListItemIcon>
                      <ManageAccounts />
                    </ListItemIcon>
                    <ListItemText primary="Personal Details" />
                  </ListItemButton>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <ListItem>
              <ListItemButton href="/">
                <ListItemIcon>
                  <Security />
                </ListItemIcon>
                <ListItemText primary="VERIFICATION" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="/">
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                <ListItemText primary="LOGOUT" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem>
              <ListItemButton href="/">
                <ListItemIcon>
                  <Login />
                </ListItemIcon>
                <ListItemText primary="LOGIN" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="/">
                <ListItemIcon>
                  <AppRegistration />
                </ListItemIcon>
                <ListItemText primary="SIGNUP" />
              </ListItemButton>
            </ListItem>
          </>
        )}
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
    <div className="p-2 bg-primary  text-white h-[80px] flex flex-col justify-center">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="flex justify-between items-center h-12">
            <Link href={"/"}>
            <Typography variant="h6">RESEARCH</Typography>
            </Link>
            <div className="hidden md:flex gap-4 items-center justify-center">

              <Link className="hover:underline" href="/">
                HOME
              </Link>
              <Link className="hover:underline" href="/all-faculty">
                ALL FACULTY
              </Link>
              <div className="group/parent">
                <Link href="/dashboard" className="flex group/item">
                  <div>ACCOUNT</div>
                  <KeyboardArrowDown />
                </Link>
                <div className="hidden absolute group-hover/parent:flex flex-col gap-1 rounded-sm overflow-hidden text-black bg-white w-36">
                  <Link
                    href="/dashboard/all-users"
                    className="p-2 hover:bg-secondary hover:text-white w-full"
                  >
                    All Users
                  </Link>
                  <Link
                    href="/dashboard"
                    className="p-2 hover:bg-secondary hover:text-white w-full"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/add-conference"
                    className="p-2 hover:bg-secondary hover:text-white w-full"
                  >
                    Add Conference
                  </Link>
                  <Link
                    href="/dashboard/all-conferences"
                    className="p-2 hover:bg-secondary hover:text-white w-full"
                  >
                    All Conferences
                  </Link>
                  <Link
                    href="/dashboard/personal-details"
                    className="p-2 hover:bg-secondary hover:text-white w-full"
                  >
                    Personal Details
                  </Link>
                </div>
              </div>
              {authCtx.isLoggedIn ? (
                <>
                  <Link className="hover:underline" href="/dashboard/verification">
                    VERIFICATION
                  </Link>
                  <button onClick={()=>authCtx.logout()} className="hover:underline rounded-lg bg-primary p-2 text-white">
                    LOGOUT
                  </button>
                </>
              ) : (
                <>
                  <Link className="hover:underline" href="/signup">
                    SIGNUP
                  </Link>
                  <Link className="hover:underline" href="/login">
                    LOGIN
                  </Link>
                </>
              )}
            </div>
            <div className="flex md:hidden">
              <IconButton onClick={toggleDrawer(anchor, true)}>
                <Menu sx={{color:'white'}} fontSize="large" />
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
