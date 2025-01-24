import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */

let config = {
  // To have old resource links to still function after the domain was moved from www.iitm.ac.in/zanzibar/
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
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/*",
      },
    ],
  },
};

export default withPlaiceholder(config);
