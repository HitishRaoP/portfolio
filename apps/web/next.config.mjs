/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns :[
            {
                protocol : 'https',
                hostname : 'next-auth.js.org',
            }
        ]
    }
};

export default nextConfig;
