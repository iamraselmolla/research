import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { assets } from "../assets";
import { useEffect } from "react";
import { getAllConferences } from "../services/userServices";
import EventCard from "../UI/EventCard";

const AllConferences = () => {
  const [allConference, setAllConference] = useState(null);
  

  useEffect(() => {
    const getUsers = async () => {
      const allConferences = await getAllConferences();
      setAllConference(allConferences.data)

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allConference && allConference.map((conference, index) => (
          <EventCard
            key={index}
            title={conference.conferenceInfo.conferenceName}
            image={assets.whyChoose}
            date={conference.conferenceInfo.conferenceDate}
            time={[conference.conferenceInfo.startTime, conference.conferenceInfo.endTime,]}
            location={conference.conferenceInfo.conferenceLocation}
            description={conference.conferenceInfo.conferenceDescription}
            organiser={conference.organisationInfo.organizationName}
          />
        ))}
      </div>
    </Dashboard>
  );
};

export default AllConferences;
