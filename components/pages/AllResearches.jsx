import React from 'react';
import Dashboard from './Dashboard';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchAllResearchs } from '../services/userServices';
import { useSelector } from 'react-redux';
import ResearchCard from '../UI/ResearchCard';

const AllResearches = () => {
    const [allResearches, setAllResearches] = useState(null);
    const refresh = useSelector(state => state.user.refresh)
   

    useEffect(() => {
        const fetchAllResearchpapers = async () => {
            const allResearches = await fetchAllResearchs();
            setAllResearches(allResearches?.data)
        }
        fetchAllResearchpapers()
    }, [refresh])
    return (
        <Dashboard>

            <form className='mt-10 sticky top-0'>
                <div className="flex">
                  
                    <select className='font-bold text-center'>
                        <option selected>All</option>
                        <option>Pending</option>
                        <option>Accepted</option>
                        <option>Rejected</option>
                    </select>
                    <div className="relative w-full">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="block focus:outline-none border border-l-2 dark:bg-gray-700 dark:border-gray-600 p-2.5 rounded-r-lg text-sm w-full z-20"
                            placeholder="Search Research Papers"
                            required
                        />
                        <button
                            type="button"
                            className="absolute dark:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium h-full hover:bg-blue-800 p-2.5 right-0 rounded-r-lg text-sm text-white top-0"
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>


            {allResearches && allResearches.length > 0 && <>
                {allResearches.map((research, index) => <ResearchCard key={research?._id} data={research} index={index}></ResearchCard>)}
            </>}
        </Dashboard>
    );
};

export default AllResearches;