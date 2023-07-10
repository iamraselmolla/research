import { Clear, Close, FilePresentOutlined, OpenInNew, TaskAlt, TrendingFlat } from "@mui/icons-material";
import { useState } from "react";
import { toast } from "react-toastify";
import { changeResearchPaperStatus } from "../services/userServices";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";

const ResearchModalCard = ({ showModal, data, setShowModal }) => {
    const [remarks, setRemarks] = useState(null)
    const { description, title, file, status, createdAt, _id,updatedAt, user, remarks: feedBackRemarks } = data;
    const dispatch = useDispatch()


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
                if(result.status === 200){
                    dispatch(userActions.refreshDetails());
                }


                setShowModal(false);
            }
            handleAsyncAwaitFunc()
        }else{
            return toast.warning("Please provide a valid type of status in the handleRemarks function. Only 'approved' and 'rejected' are allowed to use. It's mandatory")
        }


    }
    return (<>
        <>

            {showModal ? (
                <>
                    <div
                        className="bg-blue-200 fixed flex focus:outline-none inset-0 items-center justify-center opacity-95 outline-none overflow-x-hidden overflow-y-auto z-50"
                    >

                        <div className="relative md:w-2/3 sm:w-2/3 lg:w-2/3 my-6 mx-auto">
                            <div style={{ top: "-5%", right: "-5%" }} onClick={() => setShowModal(false)} className="bg-red-500 cursor-pointer flex float-right h-12 items-center justify-center absolute right-2 rounded-full text-3xl text-white top-0 w-12 z-10">
                                <Close></Close>
                            </div>
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {title}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
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
                                    <div className="mt-20 items-center justify-between flex text-center">
                                        <div className="font-bold flex justify-center items-center flex-col">
                                            <div className="w-16 h-16 justify-center items-center flex border-8 border-black rounded-full">
                                            <FilePresentOutlined fontSize="large" /> 
                                            </div>
                                             {new Date(createdAt).toLocaleString()}
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <TrendingFlat fontSize="large"/>
                                        </div>
                                       { feedBackRemarks &&  <div className={`font-bold flex flex-col justify-center items-center ${status === 'approved' ? "text-green-500" : (status === 'rejected') ? "text-red-500" : ''}`}>
                                          
                                          <div className={`w-16 h-16 justify-center items-center flex border-8 ${status === 'approved' ? 'border-green-600' : status === 'rejected'?
                                           'border-red-600' : ''} rounded-full`}>
                                            {status === 'approved'  && <TaskAlt/>}
                                            {status === 'rejected'  && <Clear fontSize="large" color="error" />}
                                          </div>
                                          {new Date(updatedAt).toLocaleString()}
                                        </div>}
                                    </div>
                                </div>
                               { status === 'pending' && <div className="px-5">
                                    <h2 className="font-bold">Write Remarks</h2>
                                    <textarea onChange={(e) => setRemarks(e.target.value)} rows={3} className="bg-gray-300 rounded-md w-full"></textarea>
                                </div>}
                                {/*footer*/}
                                <div className={`flex ${status === 'rejected' && "bg-red-800" } ${status === 'approved' && 'bg-green-600'} items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b`}>
                                   {status === 'pending' ? <> <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => handleRemarks("approved")}
                                    >
                                        ACCEPT
                                    </button>
                                    <button
                                        className="background-transparent bg-red-500 duration-150 ease-linear focus:outline-none font-bold mb-1 mr-1 outline-none px-6 py-3  rounded text-sm text-white transition-all uppercase"
                                        type="button"
                                        onClick={() => handleRemarks("rejected")}
                                    >
                                        REJECT
                                    </button></> : <>
                                    
                                        <span className="text-2xl font-bold text-center w-full text-white">
                                        {status === 'rejected' ? 'Rejected' : (status === 'approved' ? 'Approved' : '')}
                                        </span>
                                    </>}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    </>);
}

export default ResearchModalCard;