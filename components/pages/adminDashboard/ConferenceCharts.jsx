import dynamic from 'next/dynamic';
import React from 'react';
import { useSelector } from 'react-redux';

const ConferenceCharts = () => {
    const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const { conferences } = useSelector(state => state.user);



    // Conference Information
    const verifiedConferences = conferences?.filter(conference => conference.status === 'approved').length;
    const activeConference = conferences?.filter(conference => conference.status === 'approved' && conference.isActive).length

    const conferenceData1 = [
        { name: 'Pending', value: (conferences?.length - verifiedConferences) },
        { name: 'Accepted', value: verifiedConferences }
    ]

    const conferenceData2 = [
        { name: 'Active', value: activeConference },
        { name: 'Not Active', value: (verifiedConferences - activeConference) }
    ]
    return (
        <div className="pt-5">
            <h2 className="text-3xl my-8 text-black font-bold text-center">
                Conference Information
            </h2>
            <div className='grid md:grid-cols-2 gap-6 sm:grid-cols-1'>
                <div className='bg-white rounded-lg px-5 py-8'>
                    <ApexChart
                        options={{
                            labels: conferenceData1.map(item => item.name),
                            responsive: [{
                                breakpoint: 480,
                                options: {
                                    legend: {
                                        position: 'top'
                                    }
                                }
                            }]
                        }}
                        series={conferenceData1.map(item => item.value)}
                        type="pie"
                        width={380}
                    />
                </div>
                <div className='bg-white rounded-lg px-5 py-8'>
                    <ApexChart
                        options={{
                            labels: conferenceData2.map(item => item.name),
                            responsive: [{
                                breakpoint: 480,
                                options: {
                                    legend: {
                                        position: 'top'
                                    }
                                }
                            }]
                        }}
                        series={conferenceData2.map(item => item.value)}
                        type="pie"
                        width={380}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConferenceCharts;