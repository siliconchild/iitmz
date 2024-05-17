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
      // Basic redirect
      {
        source: "/financial-aid",
        destination: "/",
        permanent: false,
      },
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
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default withPlaiceholder(config);
