/** @type {import("next").NextConfig} */
const config = {
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=300, stale-while-revalidate=300, s-maxage=86400",
          },
        ],
      },
    ];
  },
};

export default config;
