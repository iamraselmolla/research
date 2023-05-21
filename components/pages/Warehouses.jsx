import React, { useEffect, useRef, useState } from "react";
import ResponsiveDrawer from "../UI/ResponsiveDrawer";
import TopCard from "../UI/TopCard";
import Footer from "../UI/Footer";
import SplashScreen from "../SplashScreen";
import { Container } from "@mui/system";
import axios from "axios";
import Link from "next/link";
import { Button } from "@mui/material";
import { Call, Search, Visibility } from "@mui/icons-material";
import Image from "next/image";
import { assets } from "../assets";
import FormWrapper from "../UI/FormWrapper";
import CardSkelton from "../skeltons/CardSkelton";
import cities_arr, { state_arr } from "../utils/CityDropdown";
const Warehouses = () => {
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(true);
  const [warehouses, setWarehouses] = useState([]);
  const [searchWarehouses, setSearchWarehouses] = useState([]);
  const [search,setSearch]=useState({
    city:'',
    state:'',
    type:'',
    category:'',
  })

  const Card=({item})=>{
    return(
      <div className='col-span-1 shadow-2xl rounded-xl overflow-hidden p-2 flex flex-col gap-4  '>
      <div className='h-[200px] overflow-hidden rounded-xl'>
      <Image width={600} height={400} alt='Warehouse' src={item.imageUrl} className='object-cover w-[100%]'/>
      </div>

      <div  className='flex justify-between '>
        <div className='w-full'>
          <h3 className='text-lg  font-bold'>{item.propertyName}</h3>
        </div>

      </div>
      <div className='flex flex-col gap-2 '>
        <div className='flex justify-between'>
          <h3>Format</h3>
          <h3 className='font-semibold'>{item.format}</h3>
        </div>
        <div className='flex justify-between'>
          <h3>Type</h3>
          <h3 className='font-semibold'>{item.type}</h3>
        </div>
        <div className='flex justify-between'>
          <h3>Size</h3>
          <h3 className='font-semibold'>{item.size}</h3>
        </div>
        <div className='flex justify-between'>
          <h3>Zone</h3>
          <h3 className='font-semibold'>{item.zone}</h3>
        </div>
        <div className='flex justify-between'>
          <h3>Category</h3>
          <h3 className='font-semibold'>{item.category}</h3>
        </div>
        <div className='flex justify-between'>
          <h3>Address</h3>
          <h3 className='font-semibold'>{item.address}</h3>
        </div>
        <div className='flex justify-between'>
          <h3>City</h3>
          <h3 className='font-semibold'>{item.city}</h3>
        </div>
        <div className='flex justify-between'>
          <h3>State</h3>
          <h3 className='font-semibold'>{state_arr[item.state]}</h3>
        </div>

      </div>
      <div className='mt-auto flex justify-between gap-2'>
        <a href={`tel:+918191802837`}> <Button variant='contained' sx={{backgroundColor:'#614385' ,":hover":{backgroundColor:'#516395'}}} endIcon={<Call/>}>Call</Button></a>
      </div>
    </div>

    )
  }

  useEffect(() => {
    const getWareHouses = async () => {
      const response = await axios.get("/api/warehouses");
      let temp=[];
      response.data.warehouses.map((item) => item.enabled && temp.push(item));
      setWarehouses(temp);
      setSearchWarehouses(temp);
      setDataLoading(false);
    };
    getWareHouses();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, []);

 

  useEffect(() => {

      const filteredData = warehouses.filter((item) => {
        const stateMatch = search.state ? item.state.toLowerCase().includes(search.state.toLowerCase()) : true;
        const cityMatch = search.city ? item.city.toLowerCase().includes(search.city.toLowerCase()) : true;
        const typeMatch = search.type ? item.type.toLowerCase()==search.type.toLowerCase() : true;
        // const categoryMatch = search.category ? item.category.toLowerCase().includes(search.category.toLowerCase()) : true;
        return stateMatch && cityMatch && typeMatch;
      });

      setSearchWarehouses(filteredData);
      console.log(filteredData);

      if(search.city==='' && search.state==='' && search.type==='')setSearchWarehouses(warehouses)
    

  }, [search])
  
  

  return (
    <div className="relative">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <ResponsiveDrawer />
          <TopCard title="WAREHOUSES" />

            <div className="pb-20 pt-10 bg-white text-black ">
            <Container>
          <div className="py-10">

            <FormWrapper >
            <div  className="flex flex-col">
            <label htmlFor="search_state" >State</label>
            <select onChange={(e)=>setSearch({...search,state:e.target.value})} defaultValue={search.state} name="search_state" className="bg-blue-100 p-[10px] rounded-lg">
            <option  value=''>All</option>
              {state_arr.map((item, i) =>
                <option key={i} value={i}>{item}</option>
              )}
            </select>
            </div>

  

            <div className="flex flex-col">
            <label htmlFor="search_city">City</label>
            <input onChange={(e)=>setSearch({...search,city:e.target.value})} defaultValue={search.city} type="text" className="bg-blue-100 p-2 rounded-lg" name="search_city" list="options_city"/>

             <datalist  id="options_city">
              {cities_arr.map((item, i) =>
              item.map((item2,j)=>
              <option key={j} value={item2}>{item2}</option>
              )
              )}
              </datalist> 
            </div>

            <div className="flex flex-col">
            <label htmlFor="search_type">Type</label>
            <select onChange={(e)=>setSearch({...search,type:e.target.value})} defaultValue={search.type}  className="bg-blue-100 p-[10px] rounded-lg">
             <option  value=''>All</option>
              <option value='Prefab Structure'>Prefab Structure</option>
              <option value='Semi Prefab Structure'>Semi Prefab Structure</option>
              <option value='RCC'>RCC</option>
              <option value='Shed'>Shed</option>
              <option value='Land'>Land</option>
              <option value='Multi Store'>Multi Store</option>
              </select>
            </div>
            {/* <div className="flex flex-col">
            <label htmlFor="search_category">Category</label>
            <select onChange={(e)=>setSearch({...search,category:e.target.value})} defaultValue={search.category}  className="bg-blue-100 p-[10px] rounded-lg">
             <option  value=''>All</option>
                  <option value='Approved'>Approved</option>
                  <option value='Non Approved'>Non Approved</option>
                  <option value='Both'>Both</option>
              </select>
            </div> */}

            </FormWrapper>
          </div>
              <div className='grid grid-cols-3 mdrev:grid-cols-1 gap-4 my-2'>
                {dataLoading ?
                <>
                <CardSkelton/>
                <CardSkelton/>
                <CardSkelton/>
                <CardSkelton/>
                <CardSkelton/>
                <CardSkelton/>
                </>
                : searchWarehouses.map((item,i)=> item.enabled && <Card key={i} item={item} />)}
                </div>
                {(warehouses.length===0 || searchWarehouses.length===0) && !dataLoading && <h2 className="text-xl font-bold text-center">NO WAREHOUSES FOUND</h2>}
            </Container>
            </div>
            <Footer />

        </>
      )}
    </div>
  );
};

export default Warehouses;
