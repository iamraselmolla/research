import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { assets } from "../assets";
import { useEffect } from "react";
import { getAllConferences } from "../services/userServices";
import EventCard from "../UI/EventCard";
import { CircularProgress } from "@mui/material";

const AllConferences = () => {
  const [allConference, setAllConference] = useState(null);
  const [error, setError] = useState(null)


  useEffect(() => {
    const getUsers = async () => {
      try {
        const allConferences = await getAllConferences();
        setAllConference(allConferences.data)

      }
      catch (err) {
        setAllConference([]);
        setError("No data found")
      }

    }
    getUsers();
  }, [])


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
          />
        ))}
      </div>}
      {!allConference &&
        <div className="flex justify-center overflow-hidden">
          <CircularProgress size={50} sx={{ color: 'red' }} />
        </div>
      }
      {
        error && <h1 className="text-red-500 ">
          {error}
        </h1>
      }
    </Dashboard>
  );
};

export default AllConferences;
