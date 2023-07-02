import React from 'react';
import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { fetchAllFaculty } from '../services/userServices';

const FacultyCard = () => {
    const [allFaculty, setFaculty] = useState(null)
    useEffect(() => {
        const getAllFaculty = async () => {
            const findAllFaculty = await fetchAllFaculty();
            setFaculty(findAllFaculty?.data);
        }
        getAllFaculty()
    }, []);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                {allFaculty && allFaculty?.map((faculty) => {
                    return (


                        <div className="col-span-1">
                            <div className="col-span-12  md:col-span-6 lg:col-span-4 xl:col-span-3">
                                <div className="bg-white py-10 rounded-lg shadow-lg mb-8">
                                    <div className="team-thumb">
                                        <div className="brd">
                                            <a href="https://wpdemo.zcubethemes.com/qeducato/team/howard-holmes/">
                                                <img decoding="async" src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/team09.png" alt="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/team09.png" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="team-info p-4">
                                        <h4 className="text-xl font-bold mb-2">
                                            <a href="">{faculty?.basicInfo.firstName} {faculty?.basicInfo.lastName}</a>
                                        </h4>
                                        <p>CEO & Founder</p>
                                        <div className="team-social">
                                            <ul className="flex justify-center">
                                                <li className="mr-2">
                                                    <a href="#"><FacebookOutlined></FacebookOutlined></a>
                                                </li>
                                                <li className="mr-2">
                                                    <a href="#"><Instagram></Instagram></a>
                                                </li>
                                                <li>
                                                    <a href="#"><Twitter></Twitter></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                )}
            </div>

        </div>
    );
};

export default FacultyCard;
