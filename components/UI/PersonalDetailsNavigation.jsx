import { WestSharp } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

const PersonalDetailsNavigation = ({ activePage }) => {
    const subSections = [
        { id: "personal", section: "Personal", link: "/dashboard/personal_details" },
        { id: "contact", section: "Contact", link: "/dashboard/personal_details/contact" },
    ]
    return (
        <>
            <div className='flex justify-between text-black'>
                <button>
                    <WestSharp />
                </button>
                <div className='flex gap-4'>
                    {subSections.map((item, i) => (
                        <Link key={item.id} href={item.link} className={`${activePage === item.id ? "text-primary font-bold" : "text-black"}`}>{item.section}</Link>
                    ))}
                </div>
            </div>
            <div className='w-44 text-center bg-primary p-1 rounded-md'>{activePage.toUpperCase()} DETAILS</div>
        </>
    )
}

export default PersonalDetailsNavigation