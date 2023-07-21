
import { useContext } from "react";
import Dashboard from './Dashboard';
import AuthContext from '../store/AuthContext'
import { useSelector } from 'react-redux';
import StudentDashboard from "../UI/StudentDashboard";
import AdminDashboard from "./adminDashboard/AdminDashboard";
import FacultyDashboard from "./facultyDashboard/FacultyDashboard";
const DashboardDefault = () => {
  const { role } = useContext(AuthContext)
  const { user } = useSelector(state => state.user)


  
  return (
    <Dashboard>
      <div className="user_dashboard text-black py-7">
        <h1 className="text-4xl font-extrabold text-center">
          Welcome our {role}, {user?.basicInfo?.firstName} {user?.basicInfo?.lastName}
        </h1>
      </div>
      {role === 'student' && <StudentDashboard/>}
      {role === 'admin' && <AdminDashboard/> }
      {role === 'faculty' && <FacultyDashboard/>}
      
    </Dashboard>
  )
}

export default DashboardDefault