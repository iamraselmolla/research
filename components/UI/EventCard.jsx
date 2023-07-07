

import Image from "next/image";
import { AccessTimeOutlined, LocationOnOutlined, CheckCircle, NotInterested } from "@mui/icons-material";
import axios from "axios";
import { FormControlLabel, Switch } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { verifyConferenceByAdmin } from "../services/userServices";
import { toast } from "react-toastify";
const EventCard = ({
    title,
    id,
    image,
    date,
    time,
    location,
    description,
    organiser,
    verified,
    status
}) => {
    const [approved, setApproved] = useState(status === 'approved' ? true : false);
    const handleChange = async () => {
        try{
            if(status !== 'approved'){
                const result = await verifyConferenceByAdmin({id});
                if(result){
                    toast.success("Approved");
                    setApproved(true);
                }else{
                    toast.error("Something Wrong")
                    return;
                }
            }
        }catch(err){
            console.log(err);
            return
        }


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
                    </div>
                </div>
                <div className="text-slate-400">
                    {description.slice(0, 50) + "..."}
                    <Link href="" className="text-blue-500">
                        Read More
                    </Link>
                </div>
                <div className="verified-status h-10">
                    <NotInterested className={`${!approved ? "text-red-700" : 'ok'}`} fontSize="medium" /><Switch onChange={handleChange} checked={approved} size="medium" /><CheckCircle className={`${approved ? 'text-green-400' : ''}`} fontSize="small" title="Approved" />
                </div>
                <button className="bg-secondary text-white drop-shadow-md p-1 font-bold  rounded-sm hover:opacity-90">
                    View
                </button>
            </div>

        </div>
    );
};

export default EventCard;