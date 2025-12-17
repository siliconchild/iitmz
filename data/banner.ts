export interface Banner {
  mdTitle: string;
  lgTitle: string;
  smTitle: string;
  img: string;
  linkText: string;
  linkURL: string;
}

export const banners: Banner[] = [
  {
    mdTitle: "Welcome To",
    lgTitle: "IITM Zanzibar",
    smTitle: "Empowering Africa: Shaping Next-Gen Tech Leaders and Innovators",
    img: "/banner_default.jpg",
    linkText: "",
    linkURL: "",
  },
  {
    mdTitle: "BS & M.Tech. Admissions for the academic year 2026–27 are open now",
    lgTitle: "",
    smTitle: "",
    img: "/banner_front.jpg",
    linkText: "Apply Now",
    linkURL: "https://admissions.iitmz.ac.in/",
  }
];
