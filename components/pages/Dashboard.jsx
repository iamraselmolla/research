import React, { useContext, useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";

import LogoutIcon from "@mui/icons-material/Logout";
import {  Grid, List, ListItemButton, ListItemIcon } from "@mui/material";
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
import { Duo, People, Person, Videocam } from "@mui/icons-material";
import { ALL_LINKS } from "../constants/constant";
import {usePathname} from 'next/navigation'

export const adminMenu = [
  {
    name: "Dashboard",
    pageLink: ALL_LINKS.dashboard,
    icon: <DashboardIcon />,
    showAlways: false,
  },
  {
    name: "All Users",
    pageLink: ALL_LINKS.dashboard+ALL_LINKS.allUsers,
    icon: <People />,
    showAlways: false,
  },
  {
    name: "Personal Details",
    pageLink: ALL_LINKS.dashboard+ALL_LINKS.personalDetails,
    icon: <Person />,
    showAlways: false,
  },
  {
    name: "All Conferences",
    pageLink: ALL_LINKS.dashboard+ALL_LINKS.allConference,
    icon: <Duo />,
    showAlways: false,
  },

  {
    name: "Add Conference",
    pageLink: ALL_LINKS.dashboard+ALL_LINKS.addConference,
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

  const currentRoute = usePathname();

  return (
    <div className='relative'>
    {loading ? <SplashScreen/> :
    <>
    {/* {authCtx.isLoggedIn ? */}
    <ResponsiveDrawer/>
      <div className="flex flex-row h-[calc(100vh_-_80px)] max-w-[100%] md:h-[calc(100vh_-_80px)]  bg-ligh">
        <div className="min-w-[300px]  h-[calc(100vh_-80px)] mdrev:hidden bg-white  overflow-y-auto  ">
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
                className={`bg-secondary  text-white w-full ${currentRoute===item.pageLink ? 'border-r-[10px] border-r-red-500': ''}`}
              >
                <ListItemButton sx={{ width: '100%' , }}>
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
                width: '100%',
                background: "#FBB03B",
                color:'white',
                ":hover": { background:'red' },
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
