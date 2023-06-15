import React, { useContext, useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";

import LogoutIcon from "@mui/icons-material/Logout";
import { List, ListItemButton, ListItemIcon } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import ResponsiveDrawer from "../UI/ResponsiveDrawer";
import PanelWrapper from "../UI/PanelWrapper";
import SplashScreen from "../SplashScreen";
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AuthContext from "../store/AuthContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { assets } from "../assets";
import Image from "next/image";
import { Person, Videocam } from "@mui/icons-material";
import { ALL_LINKS } from "../constants/constant";

export const adminMenu = [
  {
    name: "Dashboard",
    pageLink: ALL_LINKS.dashboard,
    icon: <DashboardIcon />,
    showAlways: false,
  },
  {
    name: "Personal Details",
    pageLink: ALL_LINKS.dashboard+ALL_LINKS.personalDetails,
    icon: <Person />,
    showAlways: false,
  },
  {
    name: "Conference Details",
    pageLink: ALL_LINKS.dashboard+ALL_LINKS.conferenceDetails,
    icon: <Videocam />,
    showAlways: false,
  },
];
const Dashboard = ({children}) => {
  const authCtx=useContext(AuthContext);
  const route=useRouter();
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
  if(!authCtx.isLoggedIn){
    route.push('/login');
  }
  }, [authCtx])
  

  useEffect(() => {
      const timer=setTimeout(() => {
          setLoading(false);
      }, 400);
    return () => {
      clearTimeout(timer);
    }
  }, [])

  const PAGES = [

  ];

  // if(!authCtx.isLoggedIn)
  // return(<div></div>)

  return (
    <div className='relative'>
    {loading ? <SplashScreen/> :
    <>
    {/* {authCtx.isLoggedIn ? */}

    <ResponsiveDrawer/>
      <div className="flex flex-row h-[calc(100vh_-_120px)] max-w-[100%] md:h-[calc(100vh_-_120px)] pb-8  bg-primary">
        <div className="min-w-[300px]  h-[calc(100vh_-_150px)] mdrev:hidden bg-white  overflow-y-auto rounded-xl mt-4 ml-4">
          <div className="flex flex-col items-center  p-4 gap-1">
            <div className="bg-white  w-[160px] h-[160px]  rounded-full overflow-hidden shadow-lg">
              {/* <Image alt='Logo' src={assets.director} className='w-[100%] h-[100%] '/> */}
            </div>
            <h1 className="font-bold  mt-4 text-black">Harish Sikka</h1>
            <h1 className="bg-sec text-white p-1 rounded-sm bg-primary">
              Student
            </h1>
          </div>

          <List className="flex flex-col items-center gap-4">
            {adminMenu.map((item, index) => (
              <Link
                href={item.pageLink}
                key={index}
                className="bg-secondary rounded-lg text-white"
              >
                <ListItemButton sx={{ width: 240 }}>
                  <ListItemIcon
                    sx={{
                      color:'white'
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  <h1 className="p-1">{item.name}</h1>
                </ListItemButton>
              </Link>
            ))}

            <ListItemButton
              sx={{
                width: 240,
                background: "#FBB03B",
                borderRadius: "8px",
                color:'white',
                ":hover": { background:'#FBB03B' },
              }}
              onClick={()=>{authCtx.logout();toast.warn("Logged out successfully")}}
            >
              <ListItemIcon>
                <LogoutIcon sx={{color:'white'}} />
              </ListItemIcon>
              <h1 className="p-1">Logout</h1>
            </ListItemButton>
          </List>
        </div>
        <PanelWrapper>
          {children}
        </PanelWrapper>

      </div>

    </>
    }
    </div>
  );
};

export default Dashboard;
