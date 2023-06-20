import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { CameraAltOutlined, CloudDone, UploadFile } from '@mui/icons-material'
import axios from 'axios';
import { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import { toast } from 'react-toastify';

const Verification = () => {
  const {localid}  = useContext(AuthContext)
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState();
  const [file, setFile] = useState()
  const onSelectImage = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImage(undefined)
      return
    }
    e.preventDefault()
    // console.log(e.target.files[0])
    setImage(e.target.files[0]);
    const formData = new FormData();
    const verifyImage = e.target.files[0];
    formData.append('file', verifyImage);
    formData.append("upload_preset", "ml_default");
    formData.append("cloud_name", "iamraselmolla");
    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/iamraselmolla/image/upload',
      formData
    );
    if(response.data.url){
      const result = await axios.put("/api/verification", {
        verification: response.data.url,
        localid
      });
      if(result.status === 200){
        toast.success("Verification Image added successfully");
      }
      
    }
  }
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
          <div className={`rounded-md border-2 ${!image ? "border-dotted" : ""} min-h-[15rem] overflow-hidden`} style={{ background: `url(${imagePreview}) no-repeat center center/cover` }}>
            {/* <div className='bg-black h-full w-full relative z-0' /> */}
            <label className={`cursor-pointer w-full relative z-10 h-full flex gap-5 justify-center items-center ${image ? 'bg-black bg-opacity-70 text-white' : 'bg-blue-200 text-black'}`}>
              <input type='file' className='hidden' onChange={onSelectImage} />
              <CameraAltOutlined className='text-primary' fontSize='large' />
              <div>{image ? "Upload Another" : "Upload Image"}</div>
            </label>
          </div>
          <div className='rounded-md border-2 border-dotted min-h-[15rem] bg-blue-200'>
            <label className='cursor-pointer w-full h-full flex gap-5 justify-center items-center'>
              <input type='file' className='hidden' onChange={(e) => setFile(e.target.value)} />
              {file ?
                <CloudDone color='success' fontSize='large' />
                :
                <>
                  <UploadFile className='text-primary' fontSize='large' />
                  <div className='text-black'>{file ? "Upload Another" : "Upload File"}</div>
                </>
              }
            </label>
          </div>
        </div>
      </Dashboard>
    </>
  )
}

export default Verification