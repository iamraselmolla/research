import { OpenInNew } from '@mui/icons-material';
import { Link } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const VerificationCard = () => {
    const { user } = useSelector(state => state.user)
    const { verification } = user;
    return (
        <div className="flex mt-5 text-black flex-col md:flex-row gap-4 px-4 py-8 mb-3 justify-between items-center bg-white rounded-lg">
            <div className='flex-1 w-full'>
                <h5 className="mb-1 text-xl font-medium text-gray-900">Previous Submission</h5>

            </div>
            <div className='flex justify-between w-full md:w-auto gap-10 '>
                <div className='flex items-center justify-center'>
                    Status : <span className={` ml-1 p-1 rounded-lg text-white ${verification.status === 'pending' ? 'bg-blue-500'
                        : verification.status === 'approved' ? 'bg-green-500'
                            : verification.status === 'rejected' ? 'bg-red-500'
                                : ''}`}> {verification.status}</span>
                </div>

                <div className="flex gap-4">
                    {verification?.img &&
                        <a target='_blank' href={verification?.img}>
                            <button className="bg-green-500 text-white rounded px-2 py-1">
                                Open Image <OpenInNew />
                            </button>
                        </a>
                    }
                    {verification?.file &&
                        <a target='_blank' href={verification?.file}>
                            <button className="bg-green-500 text-white rounded px-2 py-1">
                                Open File <OpenInNew />
                            </button>
                        </a>
                    }
                </div>
               
            </div>
            {/* {showModal && <ResearchModalCard data={data} showModal={showModal} setShowModal={setShowModal}></ResearchModalCard>} */}
        </div>

    );
};

export default VerificationCard;