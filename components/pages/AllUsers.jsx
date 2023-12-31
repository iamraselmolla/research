
import { useContext, useEffect, useState } from "react";
import Dashboard from "./Dashboard"
import AuthContext from "../store/AuthContext";
import Delete from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import { fetchAllUsers } from "../services/userServices";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice";
const AllUsers = () => {


  const {allUser} = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {

      setLoading(true)

      try {
        const getData = await fetchAllUsers();
        dispatch(userActions.setAllUsers(getData?.data));
       
       
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error(error.response.data);
      } finally {
        setLoading(false)

      }
    };

    fetchData();
  }, []);


  return (
    <Dashboard>
      {!loading && allUser &&
        <div className="w-full">
          <table className="w-full bg-white border border-black overflow-auto">
            <thead>
              <tr className="bg-secondary text-white">
                <th className="px-4 py-2 text-black border border-black text-center align-middle">SL. No.</th>
                <th className="px-4 py-2 text-black border border-black text-center align-middle">First Name</th>
                <th className="px-4 py-2 text-black border border-black text-center align-middle">Last Name</th>
                <th className="px-4 py-2 text-black border border-black text-center align-middle">Username</th>
                <th className="px-4 py-2 text-black border border-black text-center align-middle">Role</th>
                <th className="px-4 py-2 text-black border border-black text-center align-middle">Action</th>
              </tr>
            </thead>
            <tbody>
              {allUser && allUser.length > 0 && allUser.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className="px-4 py-2 text-black border border-black text-center align-middle">{index + 1}</td>
                    <td className="px-4 py-2 text-black border border-black text-center align-middle">{user.basicInfo.firstName}</td>
                    <td className="px-4 py-2 text-black border border-black text-center align-middle">{user.basicInfo.lastName}</td>
                    <td className="px-4 py-2 text-black border border-black text-center align-middle">{user.username}</td>
                    <td className={`px-4 py-2 text-black border border-black text-center align-middle text-white ${user.role==='student' && 'bg-green-500'} ${user.role==='faculty' && 'bg-orange-500'}`}>{user.role}</td>
                    <td className="px-4 py-2 text-black border border-black text-center align-middle">

                      <Delete />
                      <BlockIcon />
                    </td>
                  </tr>
                );
              })}
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      }
      {loading && <div className="flex justify-center overflow-hidden">
          <CircularProgress size={50} sx={{ color: 'red' }} />
        </div>}

    </Dashboard >
  );
};

export default AllUsers;