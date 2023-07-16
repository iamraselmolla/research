import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AccessTime, CalendarMonth, Clear, Close, Done, FilePresentOutlined, Forward, OpenInNew, TaskAlt, TrendingFlat, Visibility } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useSelector } from 'react-redux';


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
    





    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                        <select className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg block w-full p-2.5 space-y-4 ">

                            <option disabled className='font-bold' defaultValue>Select a faculty</option>
                            {allFaculty && allFaculty?.map(user => {
                                return (
                                    <option onChange={()=>setFaculty(user?._id)} value={user?._id} key={user?._id} className='font-bold'>{user?.basicInfo?.firstName} {user?.basicInfo?.lastName}</option>
                                )
                            })}
                        </select>


                    </div>
                </div>

            </BootstrapDialog>
        </div>
    );
}
