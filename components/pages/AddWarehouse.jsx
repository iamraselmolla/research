import React, { useEffect, useState } from 'react'
import Dashboard from './Dashboard'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import FormWrapper from '../UI/FormWrapper'
import { Input } from 'postcss'
import InputField from '../UI/InputField'
import Gap from '../UI/Gap'
import cities_arr, { state_arr } from '../utils/CityDropdown'
import Spinner from '../UI/Spinner'
import { Add, Cancel } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
// import cloudinary from '../utils/cloudinary'
const AddWarehouse = () => {
  const router=useRouter();
  const {id}=router.query;
  const [buttonLoading, setButtonLoading] = useState(false);
  const [preview, setPreview] = useState([]);
  const [image, setImage] = useState([]);
  const [fetchedValues,setFetchedValues]=useState({
    address: '',
    type: '',
    description: '',
    format: '',
    city: '',
    state: '',
    size:'',
    zone:'',
    category:''
  })

  useEffect(() => {
    const fetchWarehouse=async()=>{
    if(id){
    try{
    const response=await axios.get(`/api/warehouse?id=${id}`)
    const item=response.data.warehouse;
    setPreview([item.imageUrl]);
    setFetchedValues(item);
    }
    catch(err){
      toast.error(err)
    }
  }
  }
  fetchWarehouse();

  }, [id])
  


  const validationSchema = Yup.object({
    address: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
    // description:Yup.string().required('Required'),
    format: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    size: Yup.string().required('Required'),
    category: Yup.string().required('Required'),

  })

  const onSubmitHandler = async(values,{resetForm}) => {
    setButtonLoading(true);
    let imageUrl=''
    if(image.length>0){ 
    const formData=new FormData();
    formData.append('file',image[0]);
    formData.append('upload_preset','client-uploads');
    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/da75fckow/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      imageUrl = data.secure_url;
    }
    catch(err){
      console.error(err);
    }
  }

    let res;
    try{
    if(id){
      res=await axios.put(`/api/warehouse?id=${id}`,{
        address:values.address,
        type:values.type,
        format:values.format,
        city:values.city,
        state:values.state,
        imageUrl:image.length>0 ? imageUrl : preview[0],
        size:values.size,
        zone:values.zone,
        category:values.category
      });
      toast.success("Updated Successfully")

    }
    else{
      res=await axios.post('/api/warehouse',{
      address:values.address,
       type:values.type,
       format:values.format,
       city:values.city,
       state:values.state,
       imageUrl:imageUrl,
       size:values.size,
       zone:values.zone,
       category:values.category

     });
    }
    if(res.status===201){
    resetForm({values:''});
    setImage([]);
    setPreview([]);
    toast.success("Added Successfully")
    }
  }catch(err){
    console.log(err);
  }finally{
    setButtonLoading(false);
  }

  }
  useEffect(()=>{
    if(image.length===0)return;
    const objectUrl=URL.createObjectURL(image[image.length-1]);
    setPreview([...preview,objectUrl]);
  },[image])

  const addImages=(e)=>{
    setImage([...image,e.target.files[0]])
  }
  return (
    <Dashboard>
      <Formik initialValues={fetchedValues} validationSchema={validationSchema} enableReinitialize={true} onSubmit={onSubmitHandler}>
        {({ values }) => {
          return (
            <Form>
              <Gap>Warehouse Details</Gap>
              <FormWrapper>
                <InputField override={true} as='select' uni='format' labelName='Format'  fieldRequired={true}>
                <option disabled value=''>Choose</option>
                <option value='BTS'>BTS</option>
                <option value='Ready to Move'>Ready to Move</option>
                </InputField>
                <InputField override={true} as='select' uni='type' labelName='Type'  fieldRequired={true} >
                  <option disabled value=''>Choose</option>
                  <option value='Prefab Structure'>Prefab Structure</option>
                  <option value='Semi Prefab Structure'>Semi Prefab Structure</option>
                  <option value='RCC'>RCC</option>
                  <option value='Shed'>Shed</option>
                  <option value='Land'>Land</option>
                  <option value='Multi Store'>Multi Store</option>
                </InputField>
                <InputField override={true} as='select' uni='category' labelName='Category'  fieldRequired={true} >
                  <option disabled value=''>Choose</option>
                  <option value='Approved'>Approved</option>
                  <option value='Non-Approved'>Non-Approved</option>
                  <option value='Both'>Both</option>
                </InputField>
                <InputField uni='size' placeholder='10,000 sq.ft' labelName='Size' />
                <InputField override={true} as='select' uni='zone' placeholder='Red' labelName='Zone' >
                  <option disabled value=''>Choose</option>
                  <option value='Normal'>Normal</option>
                  <option value='Red'>Red</option>
                  <option value='Blue'>Blue</option>
                  <option value='Green'>Green</option>
                  <option value='Yellow'>Yellow</option>
                  <option value='Purple'>Purple</option>
                </InputField>
                <InputField uni='address' placeholder='GMS Road' labelName='Address' />
                <InputField override={true} as='select' labelName='State' uni='state' placeholder='Uttarakhand' fieldRequired={true}>
                  <option disabled value=''>Choose</option>
                  {state_arr.map((item, i) =>
                    <option key={i} value={i}>{item}</option>
                  )}
                </InputField>
                <InputField override={true} as='select' labelName='City' uni='city' placeholder='Dehradun' fieldRequired={true}>
                  <option disabled value=''>Choose</option>
                  {cities_arr[values.state]?.map((item, i) =>
                    <option key={i} value={`${item}`}>{item}</option>
                  )}
                </InputField>
              </FormWrapper>

              <Gap>Warehouse Image</Gap>
              <FormWrapper>
                    {image && (
                    preview.map((item,i)=>
                    <div key={i} className='relative'>
                    <div key={i} className=" w-full h-60 rounded-md flex justify-center items-center overflow-hidden">
                      <img className='object-contain w-[100%] h-[100%]' src={item}></img>
                    </div>
                    <IconButton onClick={()=>{setPreview(preview.filter((item2=>{
                        return item2!==item
                    })))

                    }
                    }  sx={{position:'absolute',top:-16,right:-16,zIndex:10}}  aria-label="delete" size="small"><Cancel /></IconButton>
                    </div>
                    )
                    )}
                    {preview.length<1 && <div className="border-2 border-dotted w-full h-60 border-black rounded-md flex justify-center items-center lgrev:my-2">
                    <div className=" right-0 bottom-8">
                      <label htmlFor="profile_pic">
                        <Add/>
                      </label>
                      <input
                        id="profile_pic"
                        hidden
                        type="file"
                        onChange={(e) =>addImages(e)}
                        accept="image/png, image/jpeg"
                      ></input>
                    </div>
                    </div>}
                    </FormWrapper>

              <div className='flex justify-end'>
                {!buttonLoading ? (
                  <button
                    type='submit'
                    className={`bg-primary rounded-sm text-white w-32 h-10 `}
                  >
                    {id ? 'UPDATE' :'SUBMIT'}
                  </button>
                ) : (
                  <Spinner size={40} />
                )}
              </div>
            </Form>
          )
        }}
      </Formik>
    </Dashboard>
  )
}

export default AddWarehouse