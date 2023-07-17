import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { useSelector } from 'react-redux'
import ResearchCard from '../UI/ResearchCard'

const AssignResearchPapers = () => {
    const { assignResearch } = useSelector(state => state.user)

    console.log(assignResearch)

    return (
        <Dashboard>
            <div className="mt-3">
                {assignResearch?.length > 0 && <>
                    {assignResearch?.map(singleResearch => <ResearchCard data={singleResearch}/>)}
                </>}
            </div>
        </Dashboard>
    )
}

export default AssignResearchPapers