import { useEffect } from "react";
import Dashboard from "./Dashboard";
import { useState } from "react";
import { CameraAltOutlined, CloudDone, UploadFile } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";


const AddResearchPaper = () => {

    const [image, setImage] = useState("");
    const [imagePreview, setImagePreview] = useState();
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [FileUploading, setFileUploading] = useState(false)

    const onSelectImage = async (e) => {
        if(!e.target.files[0].type.startsWith("image/")){
            toast.error("Please select an Image file");
            return;
        }
        if (!e.target.files || e.target.files.length === 0) {
            setImage(undefined)
            return;
        }
        e.preventDefault()
        // console.log(e.target.files[0])
        setImage(e.target.files[0]);

    }
    const handleFileSelection = (e) => {
        if (!e.target.files[0].name.toLowerCase().endsWith(".pdf")) {
            toast.error("Please select a PDF file for uploading");
            return
        }
        if (!e.target.files || e.target.files.length === 0) {
            setFile(null);
            return;
        }

        const selectedFile = e.target.files[0];
        setFile(selectedFile);

    };
    useEffect(() => {
        if (!image) {
            setImagePreview(undefined)
            return
        }

        let selectedImage = URL.createObjectURL(image)
        setImagePreview(selectedImage)

    }, [image])
    return (
        <Dashboard>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='rounded-md border-2 border-dotted min-h-[15rem] bg-blue-200'>
                    <label className='cursor-pointer w-full h-full flex gap-5 justify-center items-center'>
                        <input type='file' className='hidden' onChange={handleFileSelection} />
                        {file ?
                            <CloudDone color='success' fontSize='large' />
                            :
                            <>
                                <UploadFile className='text-primary' fontSize='large' />
                                <div className='text-black'>{file ? "Upload Another" : "Upload Research File"}</div>
                            </>
                        }
                    </label>
                </div>
                <div className={`rounded-md border-2 ${!image ? "border-dotted" : ""} min-h-[15rem] overflow-hidden`} style={{ background: `url(${imagePreview}) no-repeat center center/cover` }}>
                    {/* <div className='bg-black h-full w-full relative z-0' /> */}
                    <label className={`cursor-pointer w-full relative z-10 h-full flex gap-5 justify-center items-center ${image ? 'bg-black bg-opacity-70 text-white' : 'bg-blue-200 text-black'}`}>
                        <input type='file' className='hidden' onChange={onSelectImage} />
                        <CameraAltOutlined className='text-primary' fontSize='large' />
                        <div>{image ? "Upload Another" : "Upload Student ID Card"}</div>
                    </label>
                </div>

                <button type='button' className='bg-primary text-white px-2 py-2 self-end mt-2'>
                    {!loading ? "UPLOAD FILE" : <CircularProgress />}
                </button>
                <button type='button' className='bg-primary text-white px-2 py-2 self-end mt-2'>
                    {!FileUploading ? "UPLOAD ID" : <CircularProgress />}
                </button>
            </div>
        </Dashboard>
    );
};

export default AddResearchPaper;