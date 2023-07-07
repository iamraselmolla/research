import { DownloadForOffline } from '@mui/icons-material';
import React from 'react';

const ResearchCard = ({ data, index }) => {
    const { title, description, status, file, createdAt } = data;
    return (
        <div className="w-full mb-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className="flex px-4 py-8 justify-between items-center">
                <div>
                    <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">{title}</h5>
                    <p className="text-xl">
                        {description}
                    </p>
                </div>
                <div className='flex items-center justify-center'>
                    Status : <span className={` ml-1 p-1 rounded-lg  ${status === 'pending' ? 'bg-blue-300'
                        : status === 'approved' ? 'bg-green-500'
                            : status === 'rejected' ? 'bg-red-500'
                                : ''}`}> {status}</span>
                </div>
                <div className='flex items-center justify-center'>
                    Submit At : {new Date(createdAt).toLocaleString()}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    <a target='_blank' download href={file}><DownloadForOffline style={{fontSize: "45px", color: "white"}}></DownloadForOffline></a>
                </span>

            </div>
        </div>
    );
};

export default ResearchCard;