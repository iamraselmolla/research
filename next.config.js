/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageDataCollectionTimeout: 1200000,
  images:{
    remotePatterns:[{
      protocol:'https',
      hostname:'res.cloudinary.com',
      port:'',
      pathname: '/iamraselmolla/**',
    }]
  } 
}