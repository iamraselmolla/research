import dynamic from 'next/dynamic';
import React from 'react';
import { useSelector } from 'react-redux';

const FacultyDashboard = () => {
    const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const { assignResearch } = useSelector(state => state.user);
    const pendingResearches = assignResearch?.filter(research => research.status === 'pending').length;
    const approvedResearches = assignResearch?.filter(research => research.status === 'approved').length;
    const rejectedResearches = assignResearch?.filter(research => research.status === 'rejected').length;

    const researchData1 = [
        { name: 'Pending', value: pendingResearches },
        { name: 'Accpted', value: approvedResearches },
        { name: 'Rejected', value: rejectedResearches }
    ];
    return (
        <div className="pt-5">
            <h2 className="text-3xl my-8 text-black font-bold text-center">
                Research Paper Information
            </h2>
            <div className='grid md:grid-cols-2 gap-6 sm:grid-cols-1'>
                <div className='bg-white rounded-lg px-5 py-8'>
                    <ApexChart
                        options={{
                            labels: researchData1.map(item => item.name),
                            responsive: [{
                                breakpoint: 480,
                                options: {
                                    legend: {
                                        position: 'top'
                                    }
                                }
                            }]
                        }}
                        series={researchData1.map(item => item.value)}
                        type="pie"
                        width={380}
                    />
                </div>
            </div>
        </div>
    );
};

export default FacultyDashboard;