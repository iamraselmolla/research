import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { useSelector } from 'react-redux'
import ResearchCard from '../UI/ResearchCard'
import { Search } from '@mui/icons-material'

const AssignResearchPapers = () => {
    const { assignResearch,refresh } = useSelector(state => state.user)
    const [currentResearches, setCurrentResearches] = useState([])
    const [search, setSearch] = useState({
        search: '',
        select: ''
    })

    useEffect(() => {
        if (search.select === 'approved') {
            const approvedResearches = assignResearch?.filter(research => research?.status === 'approved')
            setCurrentResearches(approvedResearches)
        } else if (search.select === 'rejected') {
            const rejectedResearches = assignResearch?.filter(research => research?.status === 'rejected')
            setCurrentResearches(rejectedResearches)
        } 
        else if (search.select === 'pending') {
            const pendingResearches = assignResearch?.filter(research => research?.status === 'pending')
            setCurrentResearches(pendingResearches)
        } else {
            setCurrentResearches(assignResearch)
        }
    }, [search, assignResearch])

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
                    <option value='approved'>Approved</option>
                    <option value='rejected'>Rejected</option>
                </select>
            </div>


            <div className="mt-3">
                {currentResearches?.length > 0 && <>
                    {currentResearches?.map(singleResearch => <ResearchCard data={singleResearch}/>)}
                </>}
            </div>
        </Dashboard>
    )
}

export default AssignResearchPapers