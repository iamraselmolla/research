import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

const AdminDashboard = () => {
  const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
  const { allUser, conferences } = useSelector(state => state.user);

  // user Information
  const admin = allUser?.filter(singleUser => singleUser.role === 'admin').length;
  const faculty = allUser?.filter(singleUser => singleUser.role === 'faculty').length;
  const student = allUser?.filter(singleUser => singleUser.role === 'student').length;
  const verifiedStudent = allUser?.filter(checkStudent =>
    checkStudent?.role === 'student' && checkStudent?.verification?.status === 'pending'
  ).length;

  const userData1 = [
    { name: 'Admin', value: admin },
    { name: 'Faculty', value: faculty },
    { name: 'Student', value: student }
  ];

  const userData2 = [
    { name: 'Verified Student', value: verifiedStudent },
    { name: 'Not Verified', value: (student - verifiedStudent) }
  ];

  // Conference Information
  const verifiedConferences = conferences?.filter(conference => conference.status === 'approved').length;
  const activeConference = conferences?.filter(conference => conference.status === 'approved' && conference.isActive).length

  const conferenceData1 = [
    { name: 'Pending', value: (conferences?.length - verifiedConferences) },
    { name: 'Accepted', value: verifiedConferences }
  ]

  const conferenceData2 = [
    { name: 'Active', value: activeConference },
    { name: 'Not Active', value: (conferences?.length - activeConference) }
  ]
console.log(verifiedConferences, activeConference, conferences.length)
  // useEffect(() => {
  //   setuserData1([
  //     { name: 'Admin', value: admin },
  //     { name: 'Faculty', value: faculty },
  //     { name: 'Student', value: student }
  //   ]);

  //   setData2([
  //     { name: 'Verified Student', value: verifiedStudent },
  //     { name: 'Not Verified', value: (student - verifiedStudent) }
  //   ]);
  // }, [admin, faculty, student, verifiedStudent]);



  return (
    <>
      <div className="pt-5">
        <h2 className="text-3xl my-5 text-black font-bold">
          User Information
        </h2>
        <div className='grid md:grid-cols-2 sm:grid-cols-1'>
          {/* Pie Chart 1 */}
          <div>
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
          <div>
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
      <div className="pt-5">
        <h2 className="text-3xl my-5 text-black font-bold">
          Conference Information
        </h2>
        <div className='grid md:grid-cols-2 sm:grid-cols-1'>
          <div>
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
          <div>
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
    </>
  );
};

export default AdminDashboard;
