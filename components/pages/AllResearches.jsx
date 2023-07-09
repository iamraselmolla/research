import React from 'react';
import Dashboard from './Dashboard';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchAllResearchs } from '../services/userServices';

const AllResearches = () => {
    const [allResearches, setAllResearches] = useState(null);

    useEffect(() => {
        const fetchAllResearchpapers = async () => {
            const allResearches = await fetchAllResearchs();
            console.log(allResearches.data)
        }
        fetchAllResearchpapers()
    }, [])
    return (
       <Dashboard>
      
       </Dashboard>
    );
};

export default AllResearches;