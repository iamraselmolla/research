import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAllConferences } from '../services/userServices';
import EventCard from '../UI/EventCard';
import { assets } from '../assets';
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import SplashScreen from '../SplashScreen';

const AllConferences2 = () => {
    const [allConference, setAllConference] = useState(null);
    const [error, setError] = useState(null);
    const [fetchEnd, setFetchEnd] = useState(false)


    useEffect(() => {
        const getUsers = async () => {
            try {
                const allConferences = await getAllConferences();
                setAllConference(allConferences.data);
                setFetchEnd(true)


            }
            catch (err) {
                setAllConference(null);
                setFetchEnd(true)
                setError("No data found")
            }

        }
        getUsers();
    }, [])
    return (
        <div className='relative bg-white'>
            {/* <ResponsiveDrawer /> */}
            {fetchEnd && !allConference.length > 0 &&
                <div className="banner bg-black">
                    <h2 className="h2 py-20 text-white text-center font-bold text-4xl">
                        "No Conference Found"
                    </h2>
                </div>
            }
            {allConference &&
                <div className="container py-8 mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
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
                    </div>
                </div>
                }
                {!allConference && <SplashScreen></SplashScreen>}
        </div >
    );
};

export default AllConferences2;