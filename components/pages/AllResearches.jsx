import React, { use } from 'react';
import Dashboard from './Dashboard';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchAllResearchs } from '../services/userServices';
import { useSelector } from 'react-redux';
import ResearchCard from '../UI/ResearchCard';
import { Search } from '@mui/icons-material';

const AllResearches = () => {
    const [allResearches, setAllResearches] = useState([]);
    const [currentResearches, setCurrentResearches] = useState([])
    const refresh = useSelector(state => state.user.refresh)
    const [search, setSearch] = useState({
        search: '',
        select: ''
    })


    useEffect(() => {
        const fetchAllResearchpapers = async () => {
            const allResearches = await fetchAllResearchs();
            setAllResearches(allResearches?.data)
        }
        fetchAllResearchpapers()
    }, [refresh])

    useEffect(() => {
        if (search.select === 'approved') {
            const approvedResearches = allResearches?.filter(research => research?.status === 'approved')
            setCurrentResearches(approvedResearches)
        } else if (search.select === 'rejected') {
            const rejectedResearches = allResearches?.filter(research => research?.status === 'rejected')
            setCurrentResearches(rejectedResearches)
        } else if (search.select === 'assigned') {
            const assignResearches = allResearches?.filter(research => research?.assigned)
            setCurrentResearches(assignResearches)
        } 
        else if (search.select === 'pending') {
            const pendingResearches = allResearches?.filter(research => research?.status === 'pending')
            setCurrentResearches(pendingResearches)
        } else {
            setCurrentResearches(allResearches)
        }
    }, [search, allResearches])

    return (
        <Dashboard>
            <div className='flex sticky top-0 gap-2 w-full mb-4'>
                <div className='bg-white rounded-lg px-4 flex-1'>
                    <Search className="text-black" />
                    <input type='text' placeholder="Search with title" className='w-[90%] bg-white p-2 placeholder:text-black text-black font-bold outline-none' />
                </div>
                <select value={search.select} onChange={(e) => setSearch({ ...search, select: e.target.value })} className='p-2 bg-white text-black font-bold rounded-lg'>
                    <option disabled>Choose</option>
                    <option value='all'>All</option>
                    <option value='pending'>pending</option>
                    <option value='assigned'>Assigned to</option>
                    <option value='approved'>Approved</option>
                    <option value='rejected'>Rejected</option>
                </select>
            </div>


            {currentResearches && currentResearches.length > 0 && <>
                {currentResearches.map((research, index) => <ResearchCard key={research?._id} data={research} index={index}></ResearchCard>)}
            </>}
        </Dashboard>
    );
};

export default AllResearches;