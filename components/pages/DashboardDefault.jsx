
import { useContext } from "react";
import Dashboard from './Dashboard';
import AuthContext from '../store/AuthContext'
import { useSelector } from 'react-redux';
import StudentDashboard from "../UI/StudentDashboard";
import AdminDashboard from "../UI/AdminDashboard";
const DashboardDefault = () => {
  const { role } = useContext(AuthContext)
  const { user } = useSelector(state => state.user)


  
  return (
    <Dashboard>
      <div className="user_dashboard text-black py-7">
        <h1 className="text-3xl font-bold text-center">
          Welcome our {role}, {user?.basicInfo?.firstName} {user?.basicInfo?.lastName}
        </h1>
      </div>
      {role === 'student' && <StudentDashboard></StudentDashboard>}
      {role === 'admin' && <AdminDashboard></AdminDashboard>}
      
    </Dashboard>
  )
}

export default DashboardDefault