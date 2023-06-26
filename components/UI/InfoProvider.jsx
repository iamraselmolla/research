import { Close, Info } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'

const InfoProvider = ({info}) => {
    const [show,setShow]=useState(true);
    return (
        <>
        {show && 
        <div className='flex bg-blue-500 text-white p-2 rounded-sm gap-2 items-center '>
            <Info  />
            <p className='flex-1'>{info}</p>
            <IconButton onClick={()=>setShow(false)} size='small'><Close sx={{ color: 'white' }} /></IconButton>
        </div>}
        </>
    )
}

export default InfoProvider