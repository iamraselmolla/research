import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { AccessTime, CalendarMonth, Clear, Close, Done, FilePresentOutlined, OpenInNew, TaskAlt, TrendingFlat, Visibility } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeResearchPaperStatus } from '../services/userServices';
import { toast } from 'react-toastify';
import { userActions } from '../store/userSlice';

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

export default function ResearchModal({ data }) {
  const [open, setOpen] = React.useState(false);
  const [remarks, setRemarks] = React.useState(null)

  const { description, title, file, status, createdAt, _id, updatedAt, user, remarks: feedBackRemarks } = data;
  const dispatch = useDispatch()

  const dateofSubmit = new Date(createdAt).toLocaleString().split(",")[0]
  const timeofSubmit = new Date(createdAt).toLocaleString().split(",")[1]
  let dateOfStatusChange, timeOfStatusChange
  if (feedBackRemarks) {
    dateOfStatusChange = new Date(updatedAt).toLocaleString().split(",")[0]
    timeOfStatusChange = new Date(updatedAt).toLocaleString().split(",")[1]
  }
  const handleRemarks = (status) => {
    if (status === 'approved' || status === 'rejected') {
      console.log(status)
      const handleAsyncAwaitFunc = async () => {
        if (!remarks) {
          return toast.error("Please add a remarks for this research paper")
        }
        if (!_id || !remarks) {
          return toast.warning("Something Wrong");
        }

        const result = await changeResearchPaperStatus(_id, { remarks }, status);
        if (result.status === 200) {
          dispatch(userActions.refreshDetails());
          if (status === 'approved') {
            toast.success("Research papar has been approved")
          }
          if (status === 'rejected') {
            toast.warn("Research paper has been rejected")
          }
        }

        setOpen(false);

      }
      handleAsyncAwaitFunc()
    } else {
      return toast.warning("Please provide a valid type of status in the handleRemarks function. Only 'approved' and 'rejected' are allowed to use. It's mandatory")
    }


  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <Visibility />
      </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div className='w-[600px] p-4 flex flex-col gap-2'>
          <div className='flex justify-between'>
            <h3 className='text-lg'>{title}</h3>
            <IconButton onClick={handleClose}><Close /></IconButton>
          </div>
          <Divider />
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              {description}
            </p>
            <div className="mt-3">
              <a target="_blank" href={file}>
                <button className="bg-green-500 text-white rounded px-2 py-1">
                  Open File <OpenInNew />
                </button>
              </a>
            </div>
            {status === 'pending' && <div className=" mt-10">
              <h2 className="font-bold">Write Remarks</h2>
              <textarea onChange={(e) => setRemarks(e.target.value)} rows={3} className="bg-gray-300 p-2 rounded-md w-full"></textarea>
            </div>}
            <div className="mt-10 items-center justify-between flex text-center">
              <div className="font-bold flex justify-center items-center flex-col">
                <div className="w-20 h-20 justify-center items-center flex border-8 border-blue-600 rounded-full">
                  <FilePresentOutlined className="text-blue-600" fontSize="large" />

                </div>
                <h3 className="mt-2 text-2xl">
                  Submitted
                </h3>
                <div className="flex mt-3 flex-col text-left">
                  <div> <CalendarMonth></CalendarMonth>  {dateofSubmit}</div>
                  <div><AccessTime></AccessTime>  {timeofSubmit}</div>
                </div>
              </div>
              {feedBackRemarks && <>
                <div className="flex justify-center items-center">
                  <TrendingFlat />
                </div>
              </>}
              {feedBackRemarks && <div className={`font-bold flex flex-col justify-center items-center ${status === 'approved' ? "text-green-500" : (status === 'rejected') ? "text-red-500" : ''}`}>

                <div className={`w-20 h-20 justify-center items-center flex border-8 ${status === 'approved' ? 'border-green-600' : status === 'rejected' ?
                  'border-red-600' : ''} rounded-full`}>
                  {status === 'approved' && <TaskAlt />}
                  {status === 'rejected' && <Clear color="error" />}
                </div>
                <h3 className="mt-2 text-2xl">
                  {status === 'approved' ? "Approved" : status === 'rejected' ? 'Rejected' : ''}
                </h3>
                <div className="flex mt-3 flex-col text-left">
                  <div> <CalendarMonth></CalendarMonth>  {dateOfStatusChange}</div>
                  <div><AccessTime></AccessTime>  {timeOfStatusChange}</div>
                </div>

              </div>}


            </div>
            {feedBackRemarks && <>
              <div className="mt-3 font-bold">
                <p className={`${status === 'approved' ? 'text-green-400' : status === 'rejected' ? 'text-red-500' : ''}`}>
                  Remarks:   {feedBackRemarks}
                </p>
              </div>
            </>}
          </div>
        </div>
        <div className={`flex ${status === 'rejected' && "bg-red-800"} ${status === 'approved' && 'bg-green-600'} items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b`}>
          {status === 'pending' ? <> <button
            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => handleRemarks("approved")}
          >
            <Done /> APPROVE
          </button>
            <button
              className="background-transparent bg-red-500 duration-150 ease-linear focus:outline-none font-bold mb-1 mr-1 outline-none px-3 py-1  rounded text-sm text-white transition-all uppercase"
              type="button"
              onClick={() => handleRemarks("rejected")}
            >
              <Close /> REJECT
            </button></> : <>

            <span className="text-2xl font-bold text-center w-full text-white">
              {status === 'rejected' ? 'Rejected' : (status === 'approved' ? 'Approved' : '')}
            </span>
          </>}

        </div>
      </BootstrapDialog>
    </div>
  );
}
