import React from 'react';
import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { fetchAllFaculty } from '../services/userServices';
import Link from 'next/link';
import FacultyCard from '../UI/FacultyCard';

const FacultyCards = () => {
    const [allFaculty, setFaculty] = useState(null)
    useEffect(() => {
        const getAllFaculty = async () => {
            const findAllFaculty = await fetchAllFaculty(`/api/allfaculty`);
            setFaculty(findAllFaculty?.data);
        }
        getAllFaculty()
    }, []);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                {allFaculty && allFaculty?.map((faculty) => {
                    return (


                       <FacultyCard key={faculty?._id} data = {faculty}/>
                    )
                }

                )}
            </div>

        </div>
    );
};

export default FacultyCards;
