/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    remotePatterns: [
        {
            protocol: "https",
            hostname: "**",
        },
    ],
};

export default nextConfig;
