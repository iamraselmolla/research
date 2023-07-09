import { DownloadForOffline } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';

const ResearchCard = ({ data, index }) => {
    const { title, description, status, file, createdAt } = data;
    return (


        <div className="flex text-black flex-col md:flex-row gap-4 px-4 py-8 justify-between items-center bg-white rounded-lg">
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
            <div className='flex items-center justify-center'>
                Submit At : {new Date(createdAt).toLocaleString()}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
                <Link target='_blank' download href={file}><DownloadForOffline style={{ fontSize: "45px", color: "black" }}></DownloadForOffline></Link>
            </span>
            </div>

        </div>

    );
};

export default ResearchCard;