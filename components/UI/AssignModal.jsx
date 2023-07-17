import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AccessTime, CakeOutlined, CalendarMonth, Clear, Close, Done, FilePresentOutlined, Forward, Handshake, OpenInNew, Person, TaskAlt, TrendingFlat, Visibility } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../store/userSlice';
import { handleAssignResearch } from '../services/userServices';
import { toast } from 'react-toastify';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function AssignModal({ data }) {
    const [open, setOpen] = React.useState(false);
    const { allUser } = useSelector(state => state.user);
    const allFaculty = allUser?.filter(faculty => faculty?.role === 'faculty')
    const [faculty, setFaculty] = React.useState(null);
    const [facultyData, setFacultyData] = React.useState(null)
    const dispacth = useDispatch()


    React.useEffect(() => {
        const parsedFacultyData = JSON.parse(faculty);
        setFacultyData(parsedFacultyData)
        if (facultyData) {
            console.log(facultyData)
        }
    }, [faculty]);




    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setFacultyData(null)
    };
    const calculateAge = (dob) => {
        const diff_ms = Date.now() - new Date(dob).getTime();
        const age_dt = new Date(diff_ms);
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    const hanldleAssign = async () => {
        if (!facultyData) {
            return toast.error("Please select a faculty to assign")
        }
        const getResult = await handleAssignResearch({ userId: facultyData?._id, researchId: data?._id });
        if (getResult?.status !== 200) {
            return toast.error("Error Occured when assigning")
        }
        toast.success(`Research Paper assigned to faculty ${facultyData?.basicInfo.firstName} ${facultyData?.basicInfo.lastName}`);
        dispacth(userActions.refreshDetails())
        setOpen(false);
        setFacultyData(null)
    }

    return (
        <div>
            <IconButton onClick={handleClickOpen}>
                <div className="flex text-lg bg-green-500 px-3 py-2 text-white  rounded justify-center items-center">
                    <div>
                        Assign to
                    </div>
                    <Forward></Forward>
                </div>
            </IconButton>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <div className='w-[600px] p-4 flex flex-col gap-2'>
                    <div className='flex justify-between'>
                        <h3 className='text-lg'>Assign to a Faculty</h3>
                        <IconButton onClick={handleClose}><Close /></IconButton>
                    </div>
                    <Divider />
                    <div className="relative p-6 flex-auto">
                        <select defaultValue={"disabled"} onChange={(e) => setFaculty(e.target.value)} className="bg-gray-50 font-extrabold border text-black border-gray-300 text-sm rounded-lg block w-full p-2.5 space-y-4 ">

                            <option value={"disabled"} disabled className='font-bold'>Select a faculty</option>
                            {allFaculty && allFaculty?.map(user => {
                                return (
                                    <option value={JSON.stringify(user)} key={user?._id} className='font-bold'>{user?.basicInfo?.firstName} {user?.basicInfo?.lastName}</option>
                                )
                            })}
                        </select>
                        {facultyData && <>
                            <div className='grid items-center mt-5 grid-cols-1 sm:grid-cols-3 gap-4' >
                                <div className='col-span-1 bg-white  rounded-xl overflow-hidden'>
                                    <img src={facultyData?.profilePic} className='m-auto' alt='User Image' />
                                </div>
                                {/* Top Card */}
                                <div className='col-span-1 sm:col-span-2 bg-white rounded-xl shadow-xl p-4 flex flex-col gap-4'>
                                    <div className='flex justify-between items-center'>
                                        <h3 className='text-black text-2xl font-bold'>{facultyData.basicInfo.firstName + ' ' + facultyData.basicInfo.lastName} </h3>

                                    </div>
                                    <div className='flex gap-4'><Person sx={{ color: '#f72151' }} fontSize='medium' /><h3>{calculateAge(facultyData.basicInfo.dob)} years old </h3></div>
                                    <div className='flex gap-4'><CakeOutlined sx={{ color: '#f72151' }} fontSize='medium' /><h3>{new Date(facultyData.basicInfo.dob).toLocaleDateString()}</h3></div>
                                    <div className='flex gap-4'><Handshake sx={{ color: '#f72151' }} fontSize='medium' /><h3>Joined as Faculty : {new Date(facultyData.createdAt).toLocaleString()}</h3></div>
                                </div>
                            </div>
                        </>}
                        <div className="mt-3">
                            <button onClick={hanldleAssign} className='px-5 py-2 rounded text-white font-bold bg-green-400'>
                                Assign
                            </button>
                        </div>


                    </div>
                </div>

            </BootstrapDialog>
        </div>
    );
}
