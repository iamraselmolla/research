import React from 'react';

import UserCharts from './UserCharts';
import ConferenceCharts from './ConferenceCharts';
import ResearchCharts from './ResearchCharts';

const AdminDashboard = () => {


 

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
      <UserCharts></UserCharts>
      <ConferenceCharts></ConferenceCharts>
      <ResearchCharts></ResearchCharts>
     
    
    </>
  );
};

export default AdminDashboard;
