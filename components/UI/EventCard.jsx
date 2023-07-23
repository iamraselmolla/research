

import Image from "next/image";
import { AccessTimeOutlined, LocationOnOutlined, CheckCircle, NotInterested, RadioButtonUnchecked, FiberManualRecordOutlined, FiberManualRecord, DoNotDisturbOn } from "@mui/icons-material";
import axios from "axios";
import { FormControlLabel, Switch } from "@mui/material";
import Link from "next/link";
import { useContext, useState } from "react";
import { conferenceStatus, verifyConferenceByAdmin } from "../services/userServices";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice";
import AuthContext from "../store/AuthContext";
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
    status,
    isActive
}) => {
    const [approved, setApproved] = useState(status === 'approved' ? true : false);
    const dispatch = useDispatch();
    const { role } = useContext(AuthContext);
    
    const handleChange = async () => {
        try {
            if (approved) {
                return
            }
            const result = await verifyConferenceByAdmin({ id });
            if (result) {
                // dispatch(userActions.refreshDetails());

                
                dispatch(userActions.refreshDetails());
                setApproved(true)
            } else {
                toast.error("Something Wrong")
                return;
            }
        } catch (err) {
            console.log(err);
            return
        }


    };

    const handleStatusChange = async () => {

        try {
            const getResult = await conferenceStatus({ id })
            if (getResult.status !== 200) {
                return toast.error("Error Occured")
            }
            dispatch(userActions.refreshDetails())
        }
        catch (err) {
            console.log(err);
        }


    }
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


            <Image src={image} alt="Event Image" className="w-full" />
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
                {role === 'admin' && <div className="flex justify-between items-center">

                    <div className="verified-status flex flex-col items-center">
                        <div>
                            <NotInterested className={`${!approved ? "text-red-700" : 'ok'}`} fontSize="medium" />
                            <Switch onChange={handleChange} checked={approved} size="medium" />
                            <CheckCircle className={`${approved ? 'text-green-700' : ''}`} fontSize="small" title="Approved" />
                        </div>
                        <div className="font-extrabold">
                            Verified
                        </div>

                    </div>
                    {status !== 'pending' && <div className="flex flex-col items-center">
                        <div>
                            <DoNotDisturbOn className="text-slate-400"></DoNotDisturbOn>
                            <Switch checked={isActive} onClick={handleStatusChange} />
                            <FiberManualRecord className={isActive ? 'text-green-500' : ''}></FiberManualRecord>
                        </div>
                        <div className="font-extrabold">
                            Active
                        </div>
                    </div>}
                </div>}
                <Link className="bg-secondary text-center text-white drop-shadow-md p-1 font-bold  rounded-sm hover:opacity-90" href={`/conferences/${id}`}>
                    View
                </Link>
            </div>

        </div>
    );
};

export default EventCard;