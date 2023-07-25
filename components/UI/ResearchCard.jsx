import { DownloadForOffline, Forward, OpenInNew, Visibility } from '@mui/icons-material';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../store/AuthContext';
import ResearchModal from './ResearchModal';
import AssignModal from './AssignModal';
import { useSelector } from 'react-redux';



const ResearchCard = ({ data }) => {
    const { title, description, status, file, createdAt, remarks, assigned } = data;
    const { role } = useContext(AuthContext);
    const { allUser } = useSelector(state => state.user);
    let assignedFaculty;
    if (assigned) {
        assignedFaculty = allUser?.find(user => user?._id === assigned);
    }



    return (


        <>

            <div className="grid  grid-cols-6 text-black gap-4 px-4 py-6 mb-3 justify-between items-center bg-white rounded-lg">
                <div className='flex-1 w-full col-span-2'>
                    <h5 className="mb-1 text-2xl font-medium text-gray-900">{title}</h5>
                    {/* <p className="text-xl">
                    {description}
                </p> */}
                    {remarks && <p className='text-cyan-500 mt-2 font-bold'>
                        Remarks:  {remarks}
                    </p>}
                </div>
                <div className='flex items-center justify-center'>
                    Status : <span className={` ml-1 p-1 rounded-lg text-white ${status === 'pending' ? 'bg-blue-500'
                        : status === 'approved' ? 'bg-green-500'
                            : status === 'rejected' ? 'bg-red-500'
                                : ''}`}> {status}</span>
                </div>
                <div className="flex items-center gap-6 justify-center cursor-pointer">
                    {/* <Visibility onClick={handleModal} sx={{ color: "black" }}></Visibility> */}
                    <ResearchModal data={data} />



                </div>
                <div>
                    {assigned ? <p className="font-bold flex justify-center items-center flex-col">
                        Assigned: <br />
                        <a target='_blank' className='text-blue-500' href={`/faculties/${assignedFaculty?._id}`}>{assignedFaculty?.basicInfo.firstName} {assignedFaculty?.basicInfo.lastName}</a>
                    </p> : ''}
                    {status === 'pending' && role === 'admin' &&

                        <div className="flex justify-center">
                            <AssignModal data={data} />
                        </div>
                    }
                </div>
                <span className="text-sm text-gray-500 flex items-center justify-center dark:text-gray-400">
                    <Link target='_blank' download href={file}><OpenInNew ></OpenInNew></Link>
                </span>
            </div>
        </>

    );
};

export default ResearchCard;