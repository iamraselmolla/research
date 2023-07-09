import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import Footer from '../UI/Footer';
import SplashScreen from '../SplashScreen';
import { Container } from '@mui/system';
import { getAllConferences } from '../services/userServices';
import { assets } from '../assets';
import EventCard from '../UI/EventCard';
import { useSelector } from 'react-redux';
const AllConferenceHome = () => {
    const [allConference, setAllConference] = useState(null);
    const [error, setError] = useState(null);
    const [fetchEnd, setFetchEnd] = useState(false)
    const refresh = useSelector(state => state.user.refresh)



    useEffect(() => {
        const getUsers = async () => {
            try {
                // You have to provide either admin or user in the getAllConferences function or api will break
                const allConferences = await getAllConferences("user");
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
    }, [refresh])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400);
        return () => {
            clearTimeout(timer);
        }
    }, [])


    return (
        <div className='relative'>
            {loading ? <SplashScreen /> :
                <>
                    <ResponsiveDrawer />
                    {fetchEnd && !allConference.length > 0 &&
                        <div className="banner bg-black">
                            <h2 className="h2 py-20 text-white text-center font-bold text-4xl">
                                No Conference Found
                            </h2>
                        </div>
                    }
                    <div className='pt-10 bg-white text-black '>
                        <Container>
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
                        </Container>
                        <Footer />

                    </div>
                </>
            }
        </div>
    )
}

export default AllConferenceHome