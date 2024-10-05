/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        ...Array.from({ length: 10 }, (_, i) => {
          const index = i + 1;
          return {
            protocol: 'https',
            hostname: `img${index}.luminarypodcasts.com`,
            pathname: '/**',
          };
        }),
        {
          protocol: 'https',
          hostname: 'fiverr-res.cloudinary.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  