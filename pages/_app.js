

import Head from 'next/head'
import { AuthContextProvider } from '../components/store/AuthContext'
import store from '../components/store/store'
import '../styles/globals.css'
import { Provider } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
const MyApp=({ Component, pageProps })=>{
  const toastConfig = {
    position: "top-center",
  };
useEffect(()=>{
  AOS.init();
  AOS.init({
    duration:1500,
  })
},[])
  return(
  <>
  <Provider store={store}>
  <AuthContextProvider>
  <ToastContainer position={toastConfig.position}/>
  <Head>
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
  <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet"></link>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"></link>
    </Head>
  <Component {...pageProps} />
  </AuthContextProvider>
  </Provider>
  </>
  )
}

export default MyApp
