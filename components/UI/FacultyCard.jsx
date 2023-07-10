import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import { assets } from '../assets';

const FacultyCard = ({ item }) => {

    return (
        <Link href={`/faculties/${item?._id}`}>
            <div className='bg-green-400 hover:bg-primary hover:text-white hover:cursor-pointer rounded-lg shadow-sm p-8 flex flex-col gap-4'>
                <Image className='rounded-full w-40 h-40 m-auto' src={assets.art_01} alt='Faculty' />
                <h4 className='text-2xl font-bold text-center text-white'>{item.basicInfo.firstName} {item.basicInfo.lastName}</h4>

            </div>
        </Link>
    );
};

export default FacultyCard;
