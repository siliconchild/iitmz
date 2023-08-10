const navMenu = [
  { title: "Home", link: "/" },
  {
    title: "Schools",
    link: "",
    submenus: [
      {
        title: "School of Engineering & Science",
        link: "/schools/engineering-and-science/",
        submenus: [
          {
            title: "Program Advisory Committee",
            link: "/schools/engineering-and-science#pac",
          },
          {
            title: "Courses",
            link: "/schools/engineering-and-science#courses",
          },
          {
            title: "Faculty",
            link: "/schools/engineering-and-science#faculty",
          },
        ],
      },
    ],
  },
  { title: "Research", link: "/research/" },
  { title: "Careers", link: "/careers/" },
  { title: "In Media", link: "/media/" },
  { title: "Our Partners", link: "/partners/" },
  { title: "Testimonials", link: "/testimonials/" },
  { title: "Campus Life", link: "/campus-life/" },
  { title: "Financial Aid", link: "/financial-aid/" },
  { title: "Admissions", link: "/admission/" },
  { title: "Privacy Policy", link: "/privacy-policy", type: "FOOTER_ONLY" },
  { title: "Terms of Use", link: "/terms-of-use", type: "FOOTER_ONLY" },
];

export default navMenu;
