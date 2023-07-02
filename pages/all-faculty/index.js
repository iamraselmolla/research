import React from 'react';

import Head from 'next/head';
import FacultyCard from '../../components/UI/FacultyCard';
import ResponsiveDrawer from '../../components/UI/ResponsiveDrawer';

const index = () => {


    return (
        <>
            <Head>

                <title>Research - All Faculty Member</title>
                <meta charSet="utf-8" />
                <link rel="icon" href='https://res.cloudinary.com/da75fckow/image/upload/v1684919760/sikka-warehouse/logo_e3zr7m.png' />
                <meta property="og:locale" content="en_US" />
                <meta name="description" content="research_description" />
                <meta property="og:title" content="Research - Login" />
                <meta name="keywords" content="research_keywords" />

                <meta property="og:url" content="reseasrch_url" />
                {/* <meta name="author" content="Your name here" /> */}
                <meta property="og:image" itemProp='https://res.cloudinary.com/da75fckow/image/upload/v1684919760/sikka-warehouse/logo_e3zr7m.png' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
                <link rel="canonical" href="https://3plwarehouseservicez.com/" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="research_description" />
                <meta property="og:site_name" content="Research" />
            </Head>
            <>
            <ResponsiveDrawer />
            <div className="banner bg-white font-extrabold py-20 text-4xl text-black text-center mb-10">
                OUR ALL HONURABLE FACULTY MEMBERS
            </div>
            <FacultyCard />
            </>
        </>
    );
};

export default index;
