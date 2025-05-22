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
            title: "Programs Offered",
            link: "/schools/engineering-and-science#courses",
          },
          {
            title: "Faculty",
            link: "/schools/engineering-and-science#faculty",
          },
          {
            title: "Academic Calendar",
            link: "/academic-calendar",
          },
          {
            title: "Ordinances",
            link: "/schools/engineering-and-science/ordinances",
          },
        ],
      },
    ],
  },
  {
    title: "E-Learning",
    link: "",
    submenus: [
      {
        title: "Skilling Programs",
        link: "skilling-programs",
      },
      {
        title: "Web Enabled Industrial AI",
        link: "/schools/engineering-and-science/mtech-industrial-ai",
      },
    ],
  },
  { title: "Research", link: "/research/" },
  { title: "Careers", link: "/careers/" },
  { title: "In Media", link: "/media/" },
  { title: "Our Partners", link: "/partners/" },
  { title: "Campus Life", link: "/campus-life/" },
  { title: "Financial Aid", link: "/financial-aid/" },
  { title: "Events", link: "/events/" },
  { title: "Admissions", link: "/admission/" },
  { title: "Privacy Policy", link: "/privacy-policy", type: "FOOTER_ONLY" },
  { title: "Terms of Use", link: "/terms-of-use", type: "FOOTER_ONLY" },
];

export default navMenu;
