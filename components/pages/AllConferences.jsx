import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { assets } from "../assets";
import Image from "next/image";
import { AccessTimeOutlined, LocationOnOutlined } from "@mui/icons-material";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import { Switch } from "@mui/material";

const AllConferences = () => {
  const [allUsers, serUsers] = useState(null);
  const [allConference, setAllConference] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const allConferences = await axios.get('/api/allconferences');
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
  const EventCard = ({
    title,
    image,
    date,
    time,
    location,
    description,
    organiser,
  }) => {
    return (
      <div className="text-black  overflow-hidden rounded-md w-full border-[1px] border-black flex flex-col gap-3">
        <div className="px-2 text-center bg-primary bg-opacity-80 w-fit text-xl mb-[-68px] z-10 text-white relative">
          <div className="text-sm">{new Date(date).toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
          })}</div>
          <div className="text-3xl">{date.split("-")[0]}</div>
        </div>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Image src={image} className="w-full" />
        <div className="p-2 gap-2 flex flex-col">
          <div>
            <div className="text-slate-500 text-sm">{organiser}</div>
            <h1 className="font-bold text-xl">{title.toUpperCase()}</h1>
          </div>
          <div className="flex text-sm flex-col sm:flex-row gap-1 sm:items-center">
            <div className="flex gap-1 items-center bg-primary text-white rounded-full px-2 p-[1px]">
              <LocationOnOutlined />
              {location}
            </div>
            <div className="bg-primary text-white flex gap-1 items-center rounded-full px-2 p-[1px]">
              <AccessTimeOutlined />
              {time[0]} - {time[1]}
              {console.log(time)}
            </div>
          </div>
          <div className="text-slate-400">
            {description.slice(0, 50) + "..."}
            <Link href="" className="text-blue-500">
              Read More
            </Link>
          </div>
          <button className="bg-secondary text-white drop-shadow-md p-1 font-bold  rounded-sm">
            View
          </button>
        </div>
      </div>
    );
  };

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
