const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/zanzibar/:path",
        destination: "/:path",
      },
    ];
  },
  async redirects() {
    return [
      //Basic redirect
      {
        source: "/testimonials",
        destination: "/",
        permanent: false,
      },
      {
        source: "/mtech-os",
        destination: "/schools/engineering-and-science/mtech-ocean-structures",
        permanent: false,
      },
      {
        source: "/mtech-dsai",
        destination: "/schools/engineering-and-science/mtech-data-science-and-ai",
        permanent: false,
      },
      {
        source: "/bs-dsai",
        destination: "/schools/engineering-and-science/bs-data-science-and-ai",
        permanent: false,
      },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
