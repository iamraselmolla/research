import React, { useContext, useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";

import LogoutIcon from "@mui/icons-material/Logout";
import { Grid, List, ListItemButton, ListItemIcon } from "@mui/material";
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
import { CalendarMonth, Description, Duo, People, Person, Videocam, WorkspacePremium, FileOpen, Assignment } from "@mui/icons-material";
import { ALL_LINKS } from "../constants/constant";
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, getAllConferences } from "../services/userServices";
import { userActions } from "../store/userSlice";

export const menuItems = {


  dashboard: {
    name: "Dashboard",
    pageLink: ALL_LINKS.dashboard,
    icon: <DashboardIcon />,
    showAlways: false,
  },
  allUsers: {
    name: "All Users",
    pageLink: ALL_LINKS.dashboard + ALL_LINKS.allUsers,
    icon: <People />,
    showAlways: false,
  },
  personalDetails: {
    name: "Personal Details",
    pageLink: ALL_LINKS.dashboard + ALL_LINKS.personalDetails,
    icon: <Person />,
    showAlways: false,
  },
  allConferences: {
    name: "All Conferences",
    pageLink: ALL_LINKS.dashboard + ALL_LINKS.allConference,
    icon: <Duo />,
    showAlways: false,
  },
  addConference: {
    name: "Add Conference",
    pageLink: ALL_LINKS.dashboard + ALL_LINKS.addConference,
    icon: <Videocam />,
    showAlways: false,
  },
  allResearchesPapers: {
    name: "All Researches",
    pageLink: ALL_LINKS.dashboard + ALL_LINKS.allResearches,
    icon: <FileOpen />,
    showAlways: false,
  },
  verification: {
    name: "Verification",
    pageLink: ALL_LINKS.dashboard + ALL_LINKS.verification,
    icon: <WorkspacePremium />,
    showAlways: false,
  },
  assignedPapers: {
    name: "Assign Research",
    pageLink: ALL_LINKS.dashboard + ALL_LINKS.assignResearches,
    icon: <Assignment />,
    showAlways: false,
  },
  addResearchPaper: {
    name: "Add Research Paper",
    pageLink: ALL_LINKS.dashboard + ALL_LINKS.addResearchPaper,
    icon: <Description />,
    showAlways: false,
  },
  scheduler: {
    name: "Scheduler",
    pageLink: ALL_LINKS.dashboard + ALL_LINKS.scheduler,
    icon: <CalendarMonth />,
    showAlways: false,
  },
  newPage: {
    name: "New Page",
    pageLink: ALL_LINKS.dashboard + ALL_LINKS.scheduler,
    icon: <CalendarMonth />,
    showAlways: false,
  },


};
const Dashboard = ({ children }) => {

  const authCtx = useContext(AuthContext);
  const route = useRouter();
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const { user, allUser } = useSelector(state => state.user);
  const dispatch = useDispatch()

  let menu = [];

  if (authCtx.role === 'faculty') {
    menu = [menuItems.dashboard, menuItems.personalDetails, menuItems.scheduler, menuItems.addConference, menuItems.assignedPapers];
  }
  else if (authCtx.role === 'student') {
    menu = [menuItems.dashboard, menuItems.personalDetails, menuItems.verification, menuItems.addResearchPaper];
  }
  else if (authCtx.role === 'admin') {
    menu = [menuItems.dashboard, menuItems.allUsers, menuItems.allConferences, menuItems.allResearchesPapers];
  } else {

  }



  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      route.push('/login');
    }
  }, [authCtx])


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => {
      clearTimeout(timer);
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {



      try {
        if (authCtx.role === 'admin') {
          const getData = await fetchAllUsers();
          dispatch(userActions.setAllUsers(getData?.data));
          const allConferences = await getAllConferences("admin");
          dispatch(userActions.setAllConference(allConferences?.data))
        }



      } catch (error) {
        toast.error(error.response.data);
      }
    };

    fetchData();
  }, [])

  const PAGES = [

  ];

  // if(!authCtx.isLoggedIn)
  // return(<div></div>)

  const currentRoute = usePathname();

  return (
    <div className='relative'>
      {loading ? <SplashScreen /> :
        <>
          {/* {authCtx.isLoggedIn ? */}
          <ResponsiveDrawer />
          <div className="flex flex-row h-[calc(100vh_-_80px)] max-w-[100%] md:h-[calc(100vh_-_80px)]  bg-lightBackground">
            <div className="min-w-[300px]  h-[calc(100vh_-80px)] mdrev:hidden bg-white  overflow-y-auto  ">
              <div className="flex flex-col items-center  p-4 gap-1">
                <div className="bg-white  w-[160px] h-[160px]  rounded-full overflow-hidden shadow-lg">
                  {/* <Image alt='Logo' src={assets.director} className='w-[100%] h-[100%] '/> */}
                </div>
                <h1 className="font-bold  mt-4 text-black">{user?.basicInfo?.firstName} {user?.basicInfo?.lastName}</h1>
                <h1 className="bg-sec text-white p-1 rounded-sm bg-primary uppercase">
                  {user?.role}
                </h1>
              </div>

              <List className="flex flex-col items-center gap-4">
                {menu.map((item, index) => (
                  <Link
                    href={item.pageLink}
                    key={index}
                    className={`bg-secondary  text-white w-full ${currentRoute === item.pageLink ? 'border-r-[10px] border-r-red-500' : ''}`}
                  >
                    <ListItemButton sx={{ width: '100%', }}>
                      <ListItemIcon
                        sx={{
                          color: 'white'
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
                    color: 'white',
                    ":hover": { background: 'red' },
                  }}
                  onClick={() => { authCtx.logout(); toast.warn("Logged out successfully") }}
                >
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: 'white' }} />
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
