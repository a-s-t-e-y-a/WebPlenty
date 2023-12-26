/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
   
  }
module.exports ={
  nextConfig,
  images: {
    domains: ['webplenty.s3.ap-south-1.amazonaws.com'],
  },
  typescript:{
    ignoreBuildErrors:true
  }


} 
