import { DownloadForOffline, Forward, OpenInNew, Visibility } from '@mui/icons-material';
import Link from 'next/link';
import React, { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import ResearchModalCard from './ResearchModalCard';
import { useState } from 'react';
import ResearchModal from './ResearchModal';



const ResearchCard = ({ data }) => {
    const { title, description, status, file, createdAt, remarks, updatedAt } = data;
    const { role } = useContext(AuthContext)





    return (


        <div className="flex text-black flex-col md:flex-row gap-4 px-4 py-6 mb-3 justify-between items-center bg-white rounded-lg">
            <div className='flex-1 w-full'>
                <h5 className="mb-1 text-2xl font-medium text-gray-900">{title}</h5>
                <p className="text-xl">
                    {description}
                </p>
               {remarks && <p className='text-cyan-500 mt-2 font-bold'>
                  Remarks:  {remarks}
                </p>}
            </div>
            <div className='flex justify-between w-full md:w-auto gap-10 '>
                <div className='flex items-center justify-center'>
                    Status : <span className={` ml-1 p-1 rounded-lg text-white ${status === 'pending' ? 'bg-blue-500'
                        : status === 'approved' ? 'bg-green-500'
                            : status === 'rejected' ? 'bg-red-500'
                                : ''}`}> {status}</span>
                </div>
                {role === 'admin' && <>
                    <div className="flex items-center gap-6 justify-center cursor-pointer">
                        {/* <Visibility onClick={handleModal} sx={{ color: "black" }}></Visibility> */}
                        <ResearchModal data={data} />
                        <div className="flex bg-green-500 px-5 py-3 text-white font-bold  rounded justify-center items-center">
                            <button className="mr-3 rounded">
                                Assign to
                            </button>
                        <Forward></Forward>
                        </div>
                    </div>

                </>}
               
                <div className='flex flex-col items-center justify-center'>
                    <div>Submitted: {new Date(createdAt).toLocaleString()}</div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    <Link target='_blank' download href={file}><OpenInNew ></OpenInNew></Link>
                </span>
            </div>
            {/* {showModal && <ResearchModalCard data={data} showModal={showModal} setShowModal={setShowModal}></ResearchModalCard>} */}
        </div>

    );
};

export default ResearchCard;