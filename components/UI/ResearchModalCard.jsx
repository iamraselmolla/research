import { Close } from "@mui/icons-material";
import { useState } from "react";
import { toast } from "react-toastify";

const ResearchModalCard = ({ showModal, data, setShowModal }) => {
    const [remarks, setRemarks] = useState(null)
    const { description, title, file, status, createdAt, _id, user } = data;

    const handleRemarks = () => {
        if (!remarks) {
            return toast.error("Please add a remarks for this research paper")
        }
        setShowModal(false);

    }
    return (<>
        <>

            {showModal ? (
                <>
                    <div
                        className="bg-blue-200 fixed flex focus:outline-none inset-0 items-center justify-center opacity-80 outline-none overflow-x-hidden overflow-y-auto z-50"
                    >

                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div style={{top: "-5%", right: "-5%"}} onClick={() => setShowModal(false)} className="bg-red-500 cursor-pointer flex float-right h-12 items-center justify-center absolute right-2 rounded-full text-3xl text-white top-0 w-12 z-10">
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
                                </div>
                                <div className="px-5">
                                    <h2 className="font-bold">Write Remarks</h2>
                                    <textarea onChange={(e) => setRemarks(e.target.value)} rows={3} className="bg-gray-300 rounded-md w-full"></textarea>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleRemarks}
                                    >
                                        ACCEPT
                                    </button>
                                    <button
                                        className="background-transparent bg-red-500 duration-150 ease-linear focus:outline-none font-bold mb-1 mr-1 outline-none px-6 py-3  rounded text-sm text-white transition-all uppercase"
                                        type="button"
                                        onClick={handleRemarks}
                                    >
                                        REJECT
                                    </button>

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