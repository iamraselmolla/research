import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllConferences } from '../../components/services/userServices';
import EventCard from '../../components/UI/EventCard';
import { assets } from '../../components/assets';

const index = () => {
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
    return (
        <>
            {allConference && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
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
        </>
    );
};

export default index;