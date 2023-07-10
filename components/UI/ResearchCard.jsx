import { DownloadForOffline, OpenInNew, Visibility } from '@mui/icons-material';
import Link from 'next/link';
import React, { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import ResearchModalCard from './ResearchModalCard';
import { useState } from 'react';

const ResearchCard = ({ data, index }) => {
    const [showModal, setShowModal] = useState(false);
    const { title, description, status, file, createdAt } = data;
    const {role} = useContext(AuthContext)

    const handleModal = () => {
        setShowModal(true)
       
    }

    return (


        <div className="flex text-black flex-col md:flex-row gap-4 px-4 py-8 mb-3 justify-between items-center bg-white rounded-lg">
            <div className='flex-1 w-full'>
                <h5 className="mb-1 text-2xl font-medium text-gray-900">{title}</h5>
                <p className="text-xl">
                    {description}
                </p>
            </div>
            <div className='flex justify-between w-full md:w-auto gap-10 '>
                <div className='flex items-center justify-center'>
                    Status : <span className={` ml-1 p-1 rounded-lg text-white ${status === 'pending' ? 'bg-blue-500'
                        : status === 'approved' ? 'bg-green-500'
                            : status === 'rejected' ? 'bg-red-500'
                                : ''}`}> {status}</span>
                </div>
                {role === 'admin' && <>
                    <div className="flex items-center justify-center cursor-pointer">
                        <Visibility onClick={handleModal} style={{ fontSize: "45px", color: "black" }}></Visibility>
                    </div>
                </>}
                <div className='flex items-center justify-center'>
                    Submit At : {new Date(createdAt).toLocaleString()}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    <Link target='_blank' download href={file}><OpenInNew style={{ fontSize: "45px", color: "black" }}></OpenInNew></Link>
                </span>
            </div>
        {showModal && <ResearchModalCard data={data} showModal={showModal} setShowModal={setShowModal}></ResearchModalCard>}
        </div>

    );
};

export default ResearchCard;