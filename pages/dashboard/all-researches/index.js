import Head from 'next/head';
import React from 'react';
import AllResearches from '../../../components/pages/AllResearches';

const index = () => {
    return (
        <>
        <Head>
          <title>3PL Warehouse Servicez - All Researches</title>
          <meta charSet="utf-8" />
          <link rel="icon" href='https://res.cloudinary.com/da75fckow/image/upload/v1684919760/sikka-warehouse/logo_e3zr7m.png' />
          <meta property="og:locale" content="en_US" />
          <meta name="description" content="Welcome to the Warehouse Services , where we build your visions." />
          <meta property="og:title" content="Warehouse Servicez - Login" />
          <meta name="keywords" content="3PL warehouse services,3PL warehouse servicez,sikka warehouse,sikka and associates,warehouses,best warehouses,3PL warehouse login" />
  
          <meta property="og:url" content="https://3plwarehouseservicez.com/" />
          {/* <meta name="author" content="Your name here" /> */}
          <meta property="og:image" itemProp='https://res.cloudinary.com/da75fckow/image/upload/v1684919760/sikka-warehouse/logo_e3zr7m.png' />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
          <link rel="canonical" href="https://3plwarehouseservicez.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="" />
          <meta property="og:site_name" content="3PL Warehouse Servicez" />
        </Head>
        <AllResearches></AllResearches>
      </>
    );
};

export default index;