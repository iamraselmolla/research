import React from 'react';
import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { fetchAllFaculty } from '../services/userServices';
import Link from 'next/link';
import FacultyCard from '../UI/FacultyCard';
import ResponsiveDrawer from '../UI/ResponsiveDrawer';
import SplashScreen from '../SplashScreen';

const FacultiesPage = () => {
    const [allFaculty, setFaculty] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 400);
        return () => {
            clearTimeout(timer);
        }
    }, [])

    useEffect(() => {
        const getAllFaculty = async () => {
            const findAllFaculty = await fetchAllFaculty(`/api/allfaculty`);
            setFaculty(findAllFaculty?.data);
        }
        getAllFaculty()
    }, []);

    return (
        <div className='relative'>
            {loading ? <SplashScreen /> :
                <>
                    <ResponsiveDrawer />
                    <div className='py-10 px-4'>
                    <h4 className="banner bg-white font-extrabold  text-4xl text-black text-center mb-10">
                        OUR ALL HONURABLE FACULTY MEMBERS
                    </h4>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
                            {allFaculty && allFaculty?.map((faculty) => {
                                return (
                                    <FacultyCard key={faculty?._id} item={faculty} />
                                )
                            }

                            )}
                        </div>

                    </div>
                    </div>
                </>
            }
        </div>
    );
};

export default FacultiesPage;
