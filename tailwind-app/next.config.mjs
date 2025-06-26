/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pic2.zhimg.com', 'pic3.zhimg.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.zhimg.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  env: {
    WAKATIME_API_KEY: process.env.NEXT_PUBLIC_WAKATIME_API_KEY
  },
  experimental: {
    serverActions: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};

export default nextConfig;
  