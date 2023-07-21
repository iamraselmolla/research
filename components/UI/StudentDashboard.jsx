import dynamic from 'next/dynamic';
import React from 'react';
import { useSelector } from 'react-redux';

const StudentDashboard = () => {
    const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const { research } = useSelector(state => state.user);

    const pending = research?.filter(singleResearch => singleResearch.status === 'pending').length;
    const approved = research?.filter(singleResearch => singleResearch.status === 'approved').length;
    const rejected = research?.filter(singleResearch => singleResearch.status === 'rejected').length;
    const assigned = research?.filter(singleResearch => singleResearch.assigned).length;
    const total = research?.length

    const researchData1 = [
        { name: 'Pending', value: pending },
        { name: 'Approved', value: approved },
        { name: 'Rejected', value: rejected }
    ];
    const researchData2 = [
        { name: 'Assigned', value: assigned },
        { name: 'Not-assigned', value: (total - assigned) },
    ]




    return (

        <div className="pt-5">
            <h2 className="text-3xl my-5 text-black font-bold">
                Research Paper Information
            </h2>
            <div className="grid md:grid-cols-2 sm:grid-cols-1">
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

export default StudentDashboard;