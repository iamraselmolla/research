import React from 'react';
import { useSelector } from 'react-redux';

const StudentDashboard = () => {
    const { user, research } = useSelector(state => state.user);

    const pending = research?.filter(singleResearch => singleResearch.status === 'pending').length;
    const approved = research?.filter(singleResearch => singleResearch.status === 'approved').length;
    const rejected = research?.filter(singleResearch => singleResearch.status === 'rejected').length;
    const assigned = research?.filter(singleResearch => singleResearch.assigned).length;
    const total = research?.length

    const data1 = [
        { name: 'A', value: pending },
        { name: 'B', value: approved },
        { name: 'C', value: rejected }
    ];

    const data2 = [
        { name: 'X', value: assigned },
        { name: 'Y', value: (total - assigned) }
    ];

    const COLORS = ['#3B82F6', '#22C55E', '#EF4444'];
    const COLORS2 = ['#8884d8', '#82ca9d'];

    return (
        <>
            {/* <PieChart width={400} height={400}>
                <Pie
                    data={data1}
                    cx={200}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                />
            </PieChart> */}
        </>
    );
};

export default StudentDashboard;