// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   rewrites: async () => [
//     {
//       source: "/apple-app-site-association", // Match the exact path
//       destination: "/api/apple-app-site-association", // Redirect to API endpoint
//     },
//   ],
//   experimental: {
//     headers() {
//       return [
//         {
//           source: "/.well-known/apple-app-site-association",
//           headers: [{ key: "content-type", value: "application/json" }],
//         },
//       ];
//     },
//   },
// };

// export default nextConfig;
// next.config.js
module.exports = {
  rewrites: async () => [
    {
      source: "/apple-app-site-association", // Match the exact path
      destination: "/api/apple-app-site-association", // Redirect to API endpoint
    },
  ],
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
    ];
  },
};
