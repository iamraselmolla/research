import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { assets } from "../assets";
import { useEffect } from "react";
import { getAllConferences } from "../services/userServices";
import EventCard from "../UI/EventCard";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const AllConferences = () => {
  const [allConference, setAllConference] = useState(null);
  const [error, setError] = useState(null)
  const refresh = useSelector(state => state.user.refresh);
  const [fetchEnd, setFetchEnd] = useState(false)



  useEffect(() => {
    const getUsers = async () => {
      try {
        const allConferences = await getAllConferences("admin");
        setAllConference(allConferences?.data)
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


  return (
    <Dashboard>
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
