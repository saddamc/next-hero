/** @type {import('next').NextConfig} */
const nextConfig = {
   // output: 'export',
    images: {
      remotePatterns: [
        {
           protocol: "https",
           hostname: "www.themealdb.com",
           port: "",
           pathname: "/**",
        },
     ],
      },
      // redirects: async () => {
      //    return [
      //       {
      //          source: '/about',
      //          destination: '/posts',
      //          permanent: true,
      //        },
      //    ]
      // }
};

export default nextConfig;
