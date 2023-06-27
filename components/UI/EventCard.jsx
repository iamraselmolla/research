

import Image from "next/image";
import { AccessTimeOutlined, LocationOnOutlined, CheckCircle, NotInterested } from "@mui/icons-material";
import axios from "axios";
import { FormControlLabel, Switch } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
const EventCard = ({
    title,
    image,
    date,
    time,
    location,
    description,
    organiser,
}) => {

    const [verified, setVerified] = useState(false);

    const handleChange = () => {
        setVerified(!verified);
    };
    return (
        <div className="text-black  overflow-hidden rounded-md w-full border-[1px] border-black flex flex-col gap-3">
            <div className="flex justify-between	">
                <div className="px-2 text-center bg-primary bg-opacity-80 w-fit text-xl mb-[-68px] z-10 text-white relative">
                    <div>
                        <div className="text-sm">{new Date(date).toLocaleString('en-US', {
                            month: 'long',
                            day: 'numeric',
                        })}</div>
                        <div className="text-3xl">{date.split("-")[0]}</div>
                    </div>
                </div>
                <div className="verified-status pe-2">
                    <NotInterested fontSize="small" /><Switch onChange={handleChange} checked={verified} size="small" /><CheckCircle fontSize="small" title="Verified" />
                </div>
            </div>


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

export default EventCard;