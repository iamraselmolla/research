import dynamic from 'next/dynamic';
import React from 'react';
import { useSelector } from 'react-redux';

const ResearchCharts = () => {
    const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const { allResearches } = useSelector(state => state.user);

    // Research Paper asssigned
    const pendingResearches = allResearches?.filter(research => research.status === 'pending').length;
    const approvedResearches = allResearches?.filter(research => research.status === 'approved').length;
    const rejectedResearches = allResearches?.filter(research => research.status === 'rejected').length;
    const assginedResearches = allResearches?.filter(research => research?.assigned).length;


    const researchData1 = [
        { name: 'Pending', value: pendingResearches },
        { name: 'Accpted', value: approvedResearches },
        { name: 'Rejected', value: rejectedResearches }
    ];

    const researchData2 = [
        { name: 'Not assigned', value: (allResearches?.length - assginedResearches) },
        { name: 'Assigned to Faculties', value: assginedResearches },
    ]

    return (
        <div className="pt-5">
            <h2 className="text-3xl my-5 text-black font-bold">
                Research paper Information
            </h2>
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                <div>
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
                <div>
                    <ApexChart
                        options={{
                            labels: researchData2.map(item => item.name),
                            responsive: [{
                                breakpoint: 480,
                                options: {
                                    legend: {
                                        position: 'top'
                                    }
                                }
                            }]
                        }}
                        series={researchData2.map(item => item.value)}
                        type="pie"
                        width={380}
                    />
                </div>
            </div>
        </div>
    );
};

export default ResearchCharts;