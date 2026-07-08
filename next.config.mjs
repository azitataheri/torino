/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol:"http",
        hostname: "localhost",
        port: "6500",
        pathname: "/static/images/**",
      }
    ],
    unoptimized: true,
  }
};

export default nextConfig;
