import { useRouter } from "next/router"
import Spinner from "../../components/UI/Spinner"
import { useEffect, useState } from "react";
import ResponsiveDrawer from "../../components/UI/ResponsiveDrawer";
import {  CakeOutlined, Email, EscalatorWarning, Handshake, InfoOutlined, People, Person, Phone, School, TempleHindu, Work } from "@mui/icons-material";
import SplashScreen from "../../components/SplashScreen";
import Footer from "../../components/UI/Footer";
import { Container } from "@mui/material";
import TopCard from "../../components/UI/TopCard";
import axios from "axios";

const FacultyDetailsPage = () => {
    const [faculty, setFaculty] = useState(null);
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const id = router.query?.id;
    useEffect(() => {
        if (id) {
            const getAllFaculty = async () => {
                try {

                    setLoading(true)
                    const findFaculty = await axios.get(`/api/facultyDetails?id=${id}`);
                    setFaculty(findFaculty?.data)
                    setLoading(false)

                } catch (err) {
                    setLoading(false);
                    console.log(err)
                }
            }
            getAllFaculty();
        }
    }, [id]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400);
        return () => {
            clearTimeout(timer);
        }
    }, []);
    const CardWrapper = ({ children, title }) => {
        return (
            <div className='col-span-1 sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 bg-white rounded-xl p-4 gap-4'>
                <h2 id='Unbounded' className='col-span-1 sm:col-span-2 text-ter text-2xl '>{title}</h2>
                {children}
            </div>
        )
    }

    const calculateAge = (dob) => {
        const diff_ms = Date.now() - new Date(dob).getTime();
        const age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    return (<>
        <div className='relative bg-slate-100'>
            {loading ? <SplashScreen /> :
                <>
                    <ResponsiveDrawer />
                    {faculty &&
                    
                    <>
                        <TopCard title={faculty?.basicInfo.firstName + ' ' + faculty?.basicInfo.lastName} />
                    <div className='bg-white text-black '>
                        <Container>
                            {loading && <div className='py-20 '>
                                <Spinner></Spinner>
                            </div>}
                            {!loading && faculty?.basicInfo.firstName && <div className='py-20' id="screenshot-element">
                                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4' >
                                    <div className='col-span-1 h-80 bg-white  rounded-xl overflow-hidden'>
                                        <img src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d"} className='h-[100%] m-auto' alt='User Image' />
                                    </div>
                                    {/* Top Card */}
                                    <div className='col-span-1 sm:col-span-2 bg-white rounded-xl shadow-xl p-4 flex flex-col gap-4'>
                                        <div className='flex justify-between items-center'>
                                            <h3 className='text-black text-2xl font-bold'>{faculty.basicInfo.firstName + ' ' + faculty.basicInfo.lastName} </h3>
                                            {/* <div className='flex gap-4' onClick={handleScreenshot}>
                                                    <Share fontSize='large' sx={{ color: '#f72151' }} className='cursor-pointer'

                                                    />

                                                </div> */}
                                        </div>
                                        <div className='flex gap-4'><Person sx={{ color: '#f72151' }} fontSize='medium' /><h3>{calculateAge(faculty.basicInfo.dob)} years old </h3></div>
                                        <div className='flex gap-4'><CakeOutlined sx={{ color: '#f72151' }} fontSize='medium' /><h3>{new Date(faculty.basicInfo.dob).toLocaleDateString()}</h3></div>
                                        {/* <div className='flex gap-4'><TempleHindu sx={{ color: '#f72151' }} fontSize='medium' /><h3>{`${faculty.religion} / ${faculty.caste} / ${faculty.subCaste}`}</h3></div> */}
                                        {/* <div className='flex gap-4'><Work sx={{ color: '#f72151' }} fontSize='medium' /><h3>{faculty.occupation} / {faculty.employedIn}</h3></div> */}
                                        {/* <div className='flex gap-4'><LocationOn sx={{color:'#f72151'}} fontSize='medium'/><h3>{faculty.state} / {faculty.city}</h3></div> */}
                                        <div className='flex gap-4'><Handshake sx={{ color: '#f72151' }} fontSize='medium' /><h3>Joined as Faculty : {new Date(faculty.createdAt).toLocaleString()}</h3></div>
                                    </div>

                                    {/* Basic Details */}
                                    {/* <CardWrapper title='BASIC DETAILS'>
                                        <h3>Gender : <span className='font-semibold'>{faculty.basicInfo.gender}</span></h3>
                                        <h3>DOB : <span className='font-semibold'>{new Date(faculty.basicInfo.dob).toLocaleDateString()}</span></h3>
                                        <h3>Height : <span className='font-semibold'></span></h3>
                                        <h3>Mother Tongue : <span className='font-semibold'></span></h3>
                                        {
                                                faculty.maritalStatus !== 'Never Married' ? (
                                                    <h3 >No of Children : <span className='font-semibold'>{
                                                        faculty.noOfChildren === '0' || faculty.noOfChildren === "" ? 'None' : faculty.noOfChildren
                                                    }</span></h3>
                                                ) : null
                                            }  
                                        <h3>Weight : <span className='font-semibold'> Kg</span></h3>
                                        <h3>Body Type :  <span className='font-semibold'></span></h3>
                                        <h3>Complexion : <span className='font-semibold'></span></h3>
                                        <h3>Physical Status : <span className='font-semibold'></span></h3>
                                        <h3>Blood Group : <span className='font-semibold'></span></h3>
                                        <h3>Eating Habits : <span className='font-semibold'></span></h3>
                                    </CardWrapper> */}

                                    {/* <CardWrapper title='ASTROLOGICAL DETAILS'>
                                        <h3>Birth Hour : <span className='font-semibold'></span></h3>
                                        <h3>Birth Minute : <span className='font-semibold'></span></h3>
                                        <h3>Birth Place : <span className='font-semibold'></span></h3>
                                        <h3>Gotra : <span className='font-semibold'></span></h3>
                                        <h3>Star : <span className='font-semibold'></span></h3>
                                        <h3>Raasi / Moon sign : <span className='font-semibold'></span></h3>
                                        <h3>Manglik : <span className='font-semibold'></span></h3>
                                    </CardWrapper> */}
                                    

                                   
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
                                                        {faculty?.education?.map(edu =>
                                                        (
                                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {edu.title}
                                                                </th>
                                                                <td className="px-6 py-4">
                                                                    {edu.institute}
                                                                </td>
                                                                <td className="px-6 py-4">
                                                                    {new Date(edu.completion).toLocaleDateString('en-BD', { day: '2-digit', month: '2-digit', year: 'numeric' }).split("/").reverse().join("/")}

                                                                </td>
                                                            </tr>
                                                        ))}
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
    </>);
}

export default FacultyDetailsPage;