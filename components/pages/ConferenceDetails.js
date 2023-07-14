import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { getSingleConferenceById } from '../services/userServices';
import SplashScreen from '../SplashScreen';
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import TopCard from '../UI/TopCard';
import { Container } from '@mui/system';
import Spinner from '../UI/Spinner';
import { assets } from '../assets';
import { AvTimer, CakeOutlined, CalendarToday, Email, EscalatorWarning, Groups2, Handshake, InfoOutlined, LocationOn, MeetingRoom, People, Person, Phone, Place, School, Share, TempleHindu, Work } from "@mui/icons-material";
import Footer from '../UI/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../store/userSlice';
import AuthContext from '../store/AuthContext';


const ConferenceDetails = () => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const dispatch = useDispatch();
    const {role} = useContext(AuthContext);
    const id = router.query?.id;
    const {singleConference} = useSelector(state => state.user);
    if(singleConference?.conferenceInfo?.conferenceName){
        if(singleConference?.status === 'pending' && (role ==='student' || !role)){
            return router.push('/login');
        }
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400);
        return () => {
            clearTimeout(timer);
        }
    }, []);
    useEffect(() => {
        if (id) {
           dispatch(userActions.setSingleConference(id))
        }
        else{
            return
        }
    }, [id]);

    const CardWrapper = ({ children, title }) => {
        return (
            <div className='col-span-1 sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 bg-white rounded-xl p-4 gap-4'>
                <h2 id='Unbounded' className='col-span-1 sm:col-span-2 text-ter text-2xl '>{title}</h2>
                {children}
            </div>
        )
    }
    

    return (
        <div className='relative bg-slate-100'>
            {loading ? <SplashScreen /> :
                <>
                    <ResponsiveDrawer />
                    {singleConference &&

                        <>
                            <TopCard title={singleConference?.conferenceInfo?.conferenceName} />
                            <div className='bg-white text-black '>
                                <Container>
                                    {loading && <div className='py-20 '>
                                        <Spinner></Spinner>
                                    </div>}
                                    {<div className='py-20' id="screenshot-element">
                                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4' >
                                            <div className='col-span-1 h-80 bg-white  rounded-xl overflow-hidden'>
                                                <img src={assets.whyChoose} className='h-[100%] m-auto' alt='User Image' />
                                            </div>
                                            {/* Top Card */}
                                            <div className='col-span-1 sm:col-span-2 bg-white rounded-xl shadow-xl p-4 flex flex-col gap-4'>
                                                <div className='flex justify-between items-center'>
                                                    <div className="flex flex-col">
                                                        <h3 className='text-black text-2xl font-bold'>{singleConference?.conferenceInfo?.conferenceName} </h3>
                                                        <p className='text-black text-xl font-bold'>{singleConference?.conferenceInfo?.conferenceDescription} </p>
                                                    </div>
                                                    <div className='flex gap-4' >
                                                        <Share fontSize='large' sx={{ color: '#f72151' }} className='cursor-pointer'

                                                        />

                                                    </div>
                                                </div>
                                                <div className='flex gap-4'><Place sx={{ color: '#f72151' }} fontSize='medium' /><h3> {singleConference?.conferenceInfo?.conferenceLocation}</h3></div>
                                                <div className='flex gap-4'><CalendarToday sx={{ color: '#f72151' }} fontSize='medium' /><h3>{new Date(singleConference?.conferenceInfo?.conferenceDate).toLocaleString()}</h3></div>
                                                <div className='flex gap-4'><MeetingRoom sx={{ color: '#f72151' }} fontSize='medium' /><h3> {singleConference?.conferenceInfo?.conferenceType}</h3></div>
                                                <div className='flex gap-4'><Groups2 sx={{ color: '#f72151' }} fontSize='medium' /><h3>{singleConference?.conferenceInfo?.conferenceTheme}</h3></div>
                                                <div className='flex gap-4'><AvTimer sx={{ color: '#f72151' }} fontSize='medium' /><h3>{singleConference?.conferenceInfo?.startTime} - {singleConference?.conferenceInfo?.endTime}</h3></div>
                                                {/* <div className='flex gap-4'><Handshake sx={{ color: '#f72151' }} fontSize='medium' /><h3>dfgfdg</h3></div> */}
                                            </div>
                                            <CardWrapper title='REGISTRATION DETAILS'>
                                                <h3>Registration Open : <span className='font-semibold'>{new Date(singleConference?.registrationInfo?.registrationOpenDate).toLocaleString()}</span></h3>
                                                <h3>Registration Close : <span className='font-semibold'>{new Date(singleConference?.registrationInfo?.registrationCloseDate).toLocaleString()}</span></h3>
                                                <h3>Registration Fee : <span className='font-semibold'>{singleConference?.registrationInfo?.registrationFee}</span></h3>
                                                <h3>Registration Link : <span className='font-semibold'>{singleConference?.registrationInfo?.registrationLink}</span></h3>
                                              
                                            </CardWrapper>
                                            <CardWrapper title='ORGANIZATION DETAILS'>
                                                <h3>Name : <span className='font-semibold'>{singleConference?.organisationInfo?.organizationName}</span></h3>
                                                <h3>Address : <span className='font-semibold'>{singleConference?.organisationInfo?.organizationAddress}</span></h3>
                                                <h3>City : <span className='font-semibold'>{singleConference?.organisationInfo?.organizationCity}</span></h3>
                                                <h3>State : <span className='font-semibold'>{singleConference?.organisationInfo?.organizationState}</span></h3>
                                                <h3>Country : <span className='font-semibold'>{singleConference?.organisationInfo?.organizationCountry}</span></h3>

                                                {/* {
                                            faculty.maritalStatus !== 'Never Married' ? (
                                                <h3 >No of Children : <span className='font-semibold'>{
                                                    faculty.noOfChildren === '0' || faculty.noOfChildren === "" ? 'None' : faculty.noOfChildren
                                                }</span></h3>
                                            ) : null
                                        }   */}
                                                {/* <h3>Weight : <span className='font-semibold'> Kg</span></h3>
                                                <h3>Body Type :  <span className='font-semibold'>gffdg</span></h3>
                                                <h3>Complexion : <span className='font-semibold'>dfgfd</span></h3>
                                                <h3>Physical Status : <span className='font-semibold'>dfgfdg</span></h3>
                                                <h3>Blood Group : <span className='font-semibold'>dfgfdg</span></h3>
                                                <h3>Eating Habits : <span className='font-semibold'>dfgfdg</span></h3> */}
                                            </CardWrapper>

                                            <CardWrapper title='COMMITTEE DETAILS'>
                                                <div>
                                                    <h3>Chairman : <span className='font-semibold'>{singleConference?.committeeInfo?.committeeChair}</span></h3>
                                                    <div className="flex gap-3">
                                                        <div>Member: </div>
                                                        <div>
                                                            {singleConference?.committeeInfo?.committeeMembers?.map((member, index) => {
                                                                return (
                                                                    <div>
                                                                        ({index + 1}) {member}
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>

                                            </CardWrapper>



                                        </div>
                                        <div>
                                            <h2 className="col-span-1 mt-5 sm:col-span-2 text-ter mb-4 text-2xl">SPEAKERS DETAILS</h2>
                                            <div className="relative overflow-x-auto">
                                                <table className="w-full text-sm text-center  text-gray-500 dark:text-gray-400">
                                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                        <tr className="text-xl">
                                                            <th scope="col" className="px-6 py-3">
                                                                Name
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                affiliation
                                                            </th>
                                                            <th scope="col" className="px-6 py-3">
                                                                Bio
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {singleConference?.speakers?.map(speaker => <>
                                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {speaker.name}
                                                                </th>
                                                                <td className="px-6 py-4">
                                                                    {speaker.affiliation}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {speaker.bio}

                                                                </td>
                                                            </tr>
                                                        </>)}

                                                    </tbody>
                                                </table>
                                            </div>


                                        </div>
                                    </div>

                                    }

                                </Container>
                                <Footer />

                            </div>
                        </>
                    }
                </>
            }
        </div>
    );
};

export default ConferenceDetails;