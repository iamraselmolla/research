import { OpenInNew } from '@mui/icons-material';
import React from 'react';

const StudentVeirifcationCard = ({data}) => {
    return (
        <div className="flex mt-5 text-black flex-col md:flex-row gap-4 px-4 py-8 mb-3 justify-between items-center bg-white rounded-lg">
            <div className='flex-1 w-full'>
                <h5 className="mb-1 text-xl font-medium text-gray-900">
                    {data?.basicInfo?.firstName} - {data?.basicInfo?.lastName}
                </h5>

            </div>
            <div className='flex justify-between w-full md:w-auto gap-10 '>
                <div className='flex items-center justify-center'>
                    Status : <span className={` ml-1 p-1 rounded-lg text-white ${data.verification.status === 'pending' ? 'bg-blue-500'
                        : data?.verification?.status === 'approved' ? 'bg-green-500'
                            : data?.verification?.status === 'rejected' ? 'bg-red-500'
                                : ''}`}> {data?.verification.status}</span>
                </div>

                <div className="flex gap-4">
                    {data?.verification?.img &&
                        <a target='_blank' href={data?.verification?.img}>
                            <button className="bg-green-500 text-white rounded px-2 py-1">
                                Open Image <OpenInNew />
                            </button>
                        </a>
                    }
                    {data?.verification?.file &&
                        <a target='_blank' href={data?.verification?.file}>
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

export default StudentVeirifcationCard;