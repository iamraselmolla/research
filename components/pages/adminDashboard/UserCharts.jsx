import React from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

const UserCharts = () => {
    const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const { allUser } = useSelector(state => state.user);
    // user Information
    const admin = allUser?.filter(singleUser => singleUser.role === 'admin').length;
    const faculty = allUser?.filter(singleUser => singleUser.role === 'faculty').length;
    const student = allUser?.filter(singleUser => singleUser.role === 'student').length;
    const pendingverifyStudent = allUser?.filter(checkStudent =>
        checkStudent?.role === 'student' && checkStudent?.verification?.status === 'pending'
    ).length;

    const userData1 = [
        { name: 'Admin', value: admin },
        { name: 'Faculty', value: faculty },
        { name: 'Student', value: student }
    ];

    const userData2 = [
        { name: 'Not Verified Student', value: pendingverifyStudent },
        { name: 'Verified', value: (student - pendingverifyStudent) }
    ];
    return (
        <div className="pt-5">
            <h2 className="text-3xl my-8 text-black font-bold text-center">
                User Information
            </h2>
            <div className='grid md:grid-cols-2 gap-6 sm:grid-cols-1'>
                <div className='bg-white rounded-lg px-5 py-8'>
                    <ApexChart
                        options={{
                            labels: userData1.map(item => item.name),
                            responsive: [{
                                breakpoint: 480,
                                options: {
                                    legend: {
                                        position: 'top'
                                    }
                                }
                            }]
                        }}
                        series={userData1.map(item => item.value)}
                        type="pie"
                        width={380}
                    />
                </div>
                <div className='bg-white rounded-lg px-5 py-8'>

                    <ApexChart
                        options={{
                            labels: userData2.map(item => item.name),
                            responsive: [{
                                breakpoint: 480,
                                options: {
                                    legend: {
                                        position: 'bottom'
                                    }
                                }
                            }]
                        }}
                        series={userData2.map(item => item.value)}
                        type="pie"
                        width={380}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserCharts;