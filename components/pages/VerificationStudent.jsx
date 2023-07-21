import React from 'react';
import Dashboard from './Dashboard';
import { useSelector } from 'react-redux';
import StudentVeirifcationCard from '../UI/StudentVeirifcationCard';

const VerificationStudent = () => {
    const {allUser} = useSelector(state => state.user);
    const allStudents = allUser?.filter(user => user.role ==='student')
    return (
       <Dashboard>
            {allStudents?.map(student => <StudentVeirifcationCard key={student?._id} data={student}></StudentVeirifcationCard> )}
            
       </Dashboard>
    );
};

export default VerificationStudent;