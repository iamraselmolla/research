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
            {allResearches && allResearches.length>0 && <>
               { allResearches.map((research, index) => <ResearchCard key={research?._id} data={research} index={index}></ResearchCard>)}
            </>}
       </Dashboard>
    );
};

export default AllResearches;