/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/apple-app-site-association", // Match the exact path
      destination: "/api/apple-app-site-association", // Redirect to API endpoint
    },
  ],
};

export default nextConfig;
