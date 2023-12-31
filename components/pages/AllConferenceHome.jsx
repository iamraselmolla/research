import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import Footer from '../UI/Footer';
import SplashScreen from '../SplashScreen';
import { Container } from '@mui/system';
import { getAllConferences } from '../services/userServices';
import { assets } from '../assets';
import EventCard from '../UI/EventCard';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../UI/Spinner';
import { userActions } from '../store/userSlice';
const AllConferenceHome = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [fetchEnd, setFetchEnd] = useState(false)
    const [dataLoading, setDataLoading] = useState(false);
    const { refresh, conferences } = useSelector(state => state.user);
    const dispatch = useDispatch();
    console.log(conferences)



    useEffect(() => {
        const getUsers = async () => {
            try {
                // You have to provide either admin or user in the getAllConferences function or api will break
                const allConferences = await getAllConferences("user");
                dispatch(userActions.setAllConference(allConferences?.data))
                setFetchEnd(true)

            }
            catch (err) {
                setFetchEnd(true)
                setError("No data found")
            }
            finally {
                setDataLoading(false);
            }

        }
        getUsers();
    }, [refresh])



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
                    {fetchEnd && !conferences.length > 0 &&
                        <div className="banner">
                            <h2 className="h2 py-20 flex justify-center items-center text-white text-center min-h-[600px] font-bold text-4xl">
                                No Conference Found
                            </h2>
                        </div>
                    }
                    <div className='pt-10 bg-white text-black '>
                        <Container>
                            {dataLoading &&
                                <div className='flex flex-col justify-center items-center h-[600px]'>
                                    <Spinner size={60} />
                                </div>
                            }
                            {conferences && !dataLoading &&
                                <div className="container py-8 mx-auto px-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                        {conferences && conferences?.map((conference, index) => (
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
                                                id={conference?._id}
                                                isActive={conference?.isActive}
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