import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import { CameraAltOutlined, CloudDone, UploadFile } from '@mui/icons-material'

const Verification = () => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState();
  const [file, setFile] = useState()
  const onSelectImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setImage(undefined)
      return
    }
    // console.log(e.target.files[0])
    setImage(e.target.files[0])
  }
  useEffect(() => {
    if (!image) {
      setImagePreview(undefined)
      return
    }

    let selectedImage = URL.createObjectURL(image)
    setImagePreview(selectedImage)
    console.log(imagePreview)

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