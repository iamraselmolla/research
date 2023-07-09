import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { Check, CloudDone, Delete, UploadFile } from '@mui/icons-material'
import axios from 'axios';
import { useContext } from 'react';
import AuthContext from '../store/AuthContext';
import { toast } from 'react-toastify';
import { CircularProgress, IconButton } from '@mui/material';
import { addResearchPaperFile, addResearchPaperRef } from '../services/userServices';
import { useDispatch, useSelector } from 'react-redux';
import ResearchCard from '../UI/ResearchCard';
import { userActions } from '../store/userSlice';

const AddResearchPaper = () => {
  const user = useSelector(state => state.user.user);
  const allResearch = useSelector(state => state.user.research)
  const { localid } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [researchId, setResearchId] = useState(null)

  const [FileUploading, setFileUploading] = useState(false)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleFileUpload = async (e) => {
    e.preventDefault()
    if (!file) {
      setFileUploading(false);
      toast.error("Please select a file");
      return;
    }
    if (!title) {
      return toast.error("Please input research title")
    }

    setFileUploading(true)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'research');
    formData.append('cloud_name', 'iamraselmolla');
    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/iamraselmolla/image/upload',
        formData
      );
      // const response = await submitResearchFile(formData);

      if (response.data.url) {
        const data = {
          title: title,
          description: description,
          file: response.data.url
        }
        const result = await addResearchPaperFile(data);


        if (result.status === 200) {
          if (result.data.saveResearch._id) {
            const setResearchReference = await addResearchPaperRef(result.data.saveResearch._id)
            if (setResearchReference.status === 200) {
              setTitle("");
              setDescription("");
              setFile(null)             
              toast.success("Research paper submitted successfully");
              dispatch(userActions.refreshDetails());
              setFileUploading(false)
            }

          }
        }
      }
    } catch (error) {
      setFileUploading(false)
      console.error('Error during upload:', error);
      toast.error('An error occurred during file upload.');
    }
  }


  // const handleImageUpload = async () => {
  //   if (!image) {
  //     setLoading(false);
  //     toast.error("Please select an Image");
  //     return;
  //   }
  //   setLoading(true)
  //   const formData = new FormData();
  //   if (!image.type.startsWith("image/")) {
  //     setLoading(false)
  //     return toast.error("Please select valid type of image");
  //   }
  //   try {
  //     formData.append('file', image);
  //     formData.append("upload_preset", "ml_default");
  //     formData.append("cloud_name", "iamraselmolla");
  //     const response = await axios.post(cloudinaryAPILink,
  //       formData
  //     );
  //     if (response.data.url) {
  //       const result = await researchPaper(
  //         {
  //           verification: response.data.url,
  //           localid
  //         });
  //       if (result.status === 200) {
  //         toast.success("Research Paper added successfully");
  //         setLoading(false)
  //       }

  //     }
  //   }
  //   catch (err) {
  //     setLoading(false)
  //     console.error('Error during upload:', error);
  //     toast.error('An error occurred during file upload.');
  //   }

  // }
  // const onSelectImage = async (e) => {
  //   if (!e.target.files || e.target.files.length === 0) {
  //     setImage(undefined)
  //     return;
  //   }
  //   e.preventDefault()
  //   // console.log(e.target.files[0])
  //   setImage(e.target.files[0]);

  // }
  const handleFileSelection = (e) => {
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

        {/* <div className='flex flex-col gap-4 '>
            <div className={`rounded-md border-2 h-full min-h-[15rem] ${!image ? "border-dotted" : ""}  overflow-hidden`} style={{ background: `url(${imagePreview}) no-repeat center center/cover` }}>
              <label className={`cursor-pointer w-full relative z-10 h-full flex gap-5 justify-center items-center ${image ? 'bg-black bg-opacity-25 text-white' : 'bg-blue-200 text-black'}`}>
                <input type='file' className='hidden' onChange={onSelectImage} />
                <CameraAltOutlined className='text-primary' fontSize='large' />
                <div>{image ? "Upload Another" : "Upload Image"}</div>
              </label>
            </div>
            {image &&
              <div className='flex bg-green-500 items-center pl-1 justify-between'>
                <div className='flex gap-2'>
                  <div className='h-6 w-6 flex flex-col items-center justify-center bg-white rounded-full'><Check sx={{ color: 'green' }} /></div>
                  {image.name}
                  </div>
                <IconButton onClick={() => {
                  setImage("");
                  setImagePreview("")
                }}><Delete /></IconButton>
              </div>
            }

            <button disabled={loading} onClick={handleImageUpload} type='button' className='w-full bg-primary text-white px-2 py-2 self-end mt-2 disabled:bg-gray-500'>
              {!loading ? "SAVE" : <CircularProgress size={16} sx={{ color: 'white' }} />}
              </button>
              
            </div> */}
        <div className='py-4'>
          <h1 className="font-bold text-center text-4xl text-black ">
            Add Research paper
          </h1>
        </div>
        <form onSubmit={handleFileUpload}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="mb-4">

                <input value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-blue-200 block border border-gray-300 dark:border-gray-600 font-bold p-2.5 rounded-lg text-gray-900 text-sm w-full" name="title"
                  type="text"
                  placeholder="Title" />
              </div>
              <div className="mb-4">

                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name='description' rows="7" className="bg-blue-200 block border border-gray-300 dark:border-gray-600 font-bold p-2.5 rounded-lg text-gray-900 text-sm w-full" placeholder="Write about research description..."></textarea>

              </div>
            </div>
            <div className='flex gap-2 flex-col'>
              <div className='bg-blue-200 border border-gray-300 dark:border-gray-600 flex items-center justify-center min-h-[14rem] rounded-md '>
                <label className='cursor-pointer w-full h-full flex gap-5 justify-center items-center'>
                  <input type='file' className='hidden ' onChange={handleFileSelection} />

                  <UploadFile className='text-primary' fontSize='large' />
                  <div className='text-black'>{file ? "Upload Another" : "Upload File"}</div>
                </label>

              </div>

              {file &&
                <div className='flex bg-green-500 items-center p-1 justify-between'>
                  <div className='flex gap-2'>
                    <div className='h-6 w-6 flex flex-col items-center justify-center bg-white rounded-full'><Check sx={{ color: 'green' }} /></div>
                    {file.name}
                  </div>
                  <IconButton onClick={() => {
                    setFile(null);
                  }}><Delete /></IconButton>
                </div>
              }


            </div>
          </div>
          <button disabled={FileUploading} onClick={handleFileUpload} type='submit' className='bg-primary text-white w-full px-2 py-2 self-end mt-2 disabled:bg-gray-500'>
            {!FileUploading ? "SAVE" : <CircularProgress size={16} sx={{ color: 'white' }} />}
          </button>
        </form>

        <div className="research-papers mt-10 flex flex-col gap-2 ">
          {allResearch && allResearch.length > 0 &&
            allResearch?.map((research, index) => <ResearchCard key={research?._id} data={research} index={index}></ResearchCard>)}


        </div>
      </Dashboard>
    </>
  )
}

export default AddResearchPaper