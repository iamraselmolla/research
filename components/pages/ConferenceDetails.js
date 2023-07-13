import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleConferenceById } from '../services/userServices';
import SplashScreen from '../SplashScreen';
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import TopCard from '../UI/TopCard';
import { Container } from 'postcss';
import Spinner from '../UI/Spinner';
import { assets } from '../assets';

const ConferenceDetails = () => {
    const [sigleConference, setSingleConference] = useState(null)
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const id = router.query?.id;
    useEffect(() => {
        if (id) {
            const getConferenceDetails = async () => {
                const findConferenceDetails = await getSingleConferenceById({id})
                if(findConferenceDetails.status === 200){
                    setSingleConference(findConferenceDetails?.data)
                    setLoading(false)
                }
            }
            getConferenceDetails();
        }
    }, [id]);

    return (
        <div className='relative bg-slate-100'>
        {loading ? <SplashScreen /> :
            <>
                <ResponsiveDrawer />
                {sigleConference &&
                
                <>
                    <TopCard title={sigleConference?.conferenceInfo.name} />
                <div className='bg-white text-black '>
                    <Container>
                        {loading && <div className='py-20 '>
                            <Spinner></Spinner>
                        </div>}
                        { <div className='py-20' id="screenshot-element">
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4' >
                                <div className='col-span-1 h-80 bg-white  rounded-xl overflow-hidden'>
                                    <img src={assets.whyChoose} className='h-[100%] m-auto' alt='User Image' />
                                </div>
                                {/* Top Card */}
                                <div className='col-span-1 sm:col-span-2 bg-white rounded-xl shadow-xl p-4 flex flex-col gap-4'>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='text-black text-2xl font-bold'>dfhdgfhhg </h3>
                                        <div className='flex gap-4' onClick={handleScreenshot}>
                                                <Share fontSize='large' sx={{ color: '#f72151' }} className='cursor-pointer'

                                                />

                                            </div>
                                    </div>
                                    <div className='flex gap-4'><Person sx={{ color: '#f72151' }} fontSize='medium' /><h3>fdgdfgdfg years old </h3></div>
                                    <div className='flex gap-4'><CakeOutlined sx={{ color: '#f72151' }} fontSize='medium' /><h3>dfgfdggfd</h3></div>
                                    <div className='flex gap-4'><TempleHindu sx={{ color: '#f72151' }} fontSize='medium' /><h3>{`${faculty.religion} / ${faculty.caste} / ${faculty.subCaste}`}</h3></div> 
                                    <div className='flex gap-4'><Work sx={{ color: '#f72151' }} fontSize='medium' /><h3>sdfdsfdsg</h3></div>
                                     <div className='flex gap-4'><LocationOn sx={{color:'#f72151'}} fontSize='medium'/><h3>sdfdsfdsf</h3></div> 
                                    <div className='flex gap-4'><Handshake sx={{ color: '#f72151' }} fontSize='medium' /><h3>dfgfdg</h3></div>
                                </div>

                                Basic Details
                                <CardWrapper title='BASIC DETAILS'>
                                    <h3>Gender : <span className='font-semibold'>fdhggfdhgf</span></h3>
                                    <h3>DOB : <span className='font-semibold'>fghgfhgfh</span></h3>
                                    <h3>Height : <span className='font-semibold'></span></h3>
                                    <h3>Mother Tongue : <span className='font-semibold'></span></h3>
                                    {/* {
                                            faculty.maritalStatus !== 'Never Married' ? (
                                                <h3 >No of Children : <span className='font-semibold'>{
                                                    faculty.noOfChildren === '0' || faculty.noOfChildren === "" ? 'None' : faculty.noOfChildren
                                                }</span></h3>
                                            ) : null
                                        }   */}
                                    <h3>Weight : <span className='font-semibold'> Kg</span></h3>
                                    <h3>Body Type :  <span className='font-semibold'>gffdg</span></h3>
                                    <h3>Complexion : <span className='font-semibold'>dfgfd</span></h3>
                                    <h3>Physical Status : <span className='font-semibold'>dfgfdg</span></h3>
                                    <h3>Blood Group : <span className='font-semibold'>dfgfdg</span></h3>
                                    <h3>Eating Habits : <span className='font-semibold'>dfgfdg</span></h3>
                                </CardWrapper>

                                <CardWrapper title='ASTROLOGICAL DETAILS'>
                                    <h3>Birth Hour : <span className='font-semibold'>dfgfdg</span></h3>
                                    <h3>Birth Minute : <span className='font-semibold'>dfgfdg</span></h3>
                                    <h3>Birth Place : <span className='font-semibold'>dfggfd</span></h3>
                                    <h3>Gotra : <span className='font-semibold'>dfgfd</span></h3>
                                    <h3>Star : <span className='font-semibold'>dfggfd</span></h3>
                                    <h3>Raasi / Moon sign : <span className='font-semibold'>dfgfd</span></h3>
                                    <h3>Manglik : <span className='font-semibold'>dfgfdg</span></h3>
                                </CardWrapper>
                                

                               
                            </div>
                            <div>
                                <h2 className="col-span-1 mt-5 sm:col-span-2 text-ter text-2xl">Professional Details</h2>
                                    <h3 className="col-span-1 sm:col-span-2  text-xl ">Education : </h3> 
                                        <div className="relative overflow-x-auto">
                                            <table className="w-full text-sm text-center  text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                    <tr className="text-xl">
                                                        <th scope="col" className="px-6 py-3">
                                                            Title
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Institue
                                                        </th>
                                                        <th scope="col" className="px-6 py-3">
                                                            Completion
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                   
                                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                             gfdhfh
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                fghgf
                                                            </td>
                                                            <td className="px-6 py-4">
                                                               fghgfhgfhgf

                                                            </td>
                                                        </tr>
                                                 
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