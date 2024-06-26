/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'eefqnsbrieykjhuqflee.supabase.co',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',

            },
            {
                protocol: 'https',
                hostname: 'avatar.vercel.sh',
                port: '',

            },
            {
                protocol: 'https',
                hostname: 'a0.muscache.com',
                port: '',

            }
        ]
        
    }
};

export default nextConfig;