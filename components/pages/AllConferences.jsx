import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { assets } from "../assets";
import { useEffect } from "react";
import { getAllConferences } from "../services/userServices";
import EventCard from "../UI/EventCard";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice";
import { Search } from "@mui/icons-material";

const AllConferences = () => {
  const [allConference, setAllConference] = useState(null);
  const [error, setError] = useState(null)
  const [search, setSearch] = useState({
    search: '',
    select: ''
  })
  const { refresh, conferences } = useSelector(state => state.user);
  const [fetchEnd, setFetchEnd] = useState(false)
  const dispatch = useDispatch();

  console.log(conferences)



  useEffect(() => {
    const getUsers = async () => {
      try {
        const allConferences = await getAllConferences("admin");
        setAllConference(allConferences?.data);
        dispatch(userActions.setAllConference(allConferences?.data))


        setFetchEnd(true)

      }
      catch (err) {
        setAllConference(null);
        setError("No data found")
        setFetchEnd(true)
      }

    }
    getUsers();
  }, [refresh])


  // const eventList = [
  //      {
  //     title: "Sing Along",
  //     image: assets.whyChoose,
  //     date: "10-Jun-2023",
  //     time: "10:00 AM 12:00 PM",
  //     location: "Delhi",
  //     description:
  //       "This is a description of the event, The maximum characters shown in card is 50",
  //     organiser: "John Doe",
  //   },
  // ];
  // useEffect(() => {
  //   if (search.select === 'pending') {
  //     const pendingConference = allConference?.filter(conference => conference?.status === 'pending')
  //     setAllConference(pendingConference)
  //   } else if (search.select === 'approved') {
  //     const approvedConference = allConference?.filter(conference => conference?.status === 'approved')
  //     setAllConference(approvedConference)
  //   } else if (search.select === 'active') {
  //     const activeConference = allConference?.filter(research => research?.isActive)
  //     setAllConference(activeConference)
  //   } else {
  //     setAllConference(allConference)
  //   }
  // }, [ allConference])

  return (
    <Dashboard>
      <div className='flex sticky top-0  gap-2 w-full mb-4'>
        <div className='bg-white rounded-lg px-4 flex-1'>
          <Search className="text-black" />
          <input type='text' placeholder="Search with title" className='w-[90%] font-bold text-black bg-white p-2 placeholder:text-black  outline-none' />
        </div>
        <select value={search.select} onChange={(e) => setSearch({ ...search, select: e.target.value })} className='p-2 bg-white text-black font-bold rounded-lg'>
          <option disabled>Choose</option>
          <option value='all'>All</option>
          <option value='pending'>pending</option>
          <option value='approved'>Approved</option>
          <option value='active'>Active</option>
        </select>
      </div>

      {allConference && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {allConference && allConference?.map((conference, index) => (
          <EventCard
            key={index}
            title={conference.conferenceInfo.conferenceName}
            image={assets.whyChoose}
            date={conference.conferenceInfo.conferenceDate}
            time={[conference.conferenceInfo.startTime, conference.conferenceInfo.endTime,]}
            location={conference.conferenceInfo.conferenceLocation}
            description={conference.conferenceInfo.conferenceDescription}
            organiser={conference.organisationInfo.organizationName}
            verified={conference.verified}
            id={conference._id}
            isActive={conference?.isActive}
            status={conference.status}
          />
        ))}
      </div>}
      {!allConference &&
        <div className="flex justify-center overflow-hidden">
          <CircularProgress size={50} sx={{ color: 'red' }} />
        </div>
      }
      {!allConference && fetchEnd && <>
        <h1 className="text-4xl text-red-500">
          No Conference Found
        </h1>
      </>}
      {
        error && <h1 className="text-red-500 ">
          {error}
        </h1>
      }
    </Dashboard>
  );
};

export default AllConferences;
