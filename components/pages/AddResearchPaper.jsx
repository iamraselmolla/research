import { useEffect } from "react";
import Dashboard from "./Dashboard";
import { useState } from "react";
import { CameraAltOutlined, Check, CloudDone, Delete, UploadFile } from "@mui/icons-material";
import { CircularProgress, IconButton } from "@mui/material";
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
        <>
      <Dashboard>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div className='flex flex-col gap-4 '>
          <div className={`rounded-md border-2 h-full min-h-[15rem] ${!image ? "border-dotted" : ""}  overflow-hidden`} style={{ background: `url(${imagePreview}) no-repeat center center/cover` }}>
            {/* <div className='bg-black h-full w-full relative z-0' /> */}
            <label className={`cursor-pointer w-full relative z-10 h-full flex gap-5 justify-center items-center ${image ? 'bg-black bg-opacity-25 text-white' : 'bg-blue-200 text-black'}`}>
              <input type='file' className='hidden' onChange={onSelectImage} />
              <CameraAltOutlined className='text-primary' fontSize='large' />
              <div>{image ? "Upload Another" : "Upload Image"}</div>
            </label>
          </div>
          {image && 
          <div className='flex  items-center pl-1 justify-between'>
          <div className='flex gap-2'>
          <div className='h-6 w-6 flex flex-col items-center justify-center bg-white rounded-full'><Check sx={{color:'green'}}/></div>
          {image.name}
          </div>
          <IconButton onClick={()=>{
            setImage("");
            setImagePreview("")
          }}><Delete /></IconButton>
          </div>
          }

          <button disabled={loading}  type='button' className='w-full bg-primary text-white px-2 py-2 self-end mt-2 disabled:bg-gray-500'>
            {!loading ? "SAVE" : <CircularProgress size={16} sx={{color:'white'}} />}
            </button>

          </div>

          <div className='flex flex-col gap-4'>
          <div className='rounded-md border-2 border-dotted min-h-[15rem] bg-blue-200'>
            <label className='cursor-pointer w-full h-full flex gap-5 justify-center items-center'>
              <input type='file' className='hidden' onChange={handleFileSelection} />

                  <UploadFile className='text-primary' fontSize='large' />
                  <div className='text-black'>{file ? "Upload Another" : "Upload File"}</div>
            </label>
         
          </div>

          {file && 
          <div className='flex  items-center pl-1 justify-between'>
          <div className='flex gap-2'>
          <div className='h-6 w-6 flex flex-col items-center justify-center bg-white rounded-full'><Check sx={{color:'green'}}/></div>
          {file.name}
          </div>
          <IconButton onClick={()=>{
            setFile(null);
          }}><Delete /></IconButton>
          </div>
          }
          
          <button  type='button' className='bg-primary text-white w-full px-2 py-2 self-end mt-2 disabled:bg-gray-500'>
          {!FileUploading ? "SAVE" : <CircularProgress size={16} sx={{color:'white'}} />}
          </button>
          </div>



        </div>
      </Dashboard>
    </>
    );
};

export default AddResearchPaper;