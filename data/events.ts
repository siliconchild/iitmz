const eventsList = [
  {
    img: "/webinar.png",
    startDate: "April 16 2024",
    regLink:
      "https://us06web.zoom.us/webinar/register/WN_7AuU0zV4ToaM37eOExj31A",
    name: "Discover Excellence: BS in Data Science & AI at IITM Zanzibar",
    time: "03:00 PM EAT | 05:30 PM IST",
    location: "Virtual",
    desc: "Join the webinar to get insights from our distinguished speakers on how the BS program at IIT Madras Zanzibar equips students with the skills, knowledge, and global perspective needed to thrive in the digital age. The panel will highlight the innovative & interdisciplinary curriculum, cutting-edge research, industry collaborations with career prospects and global opportunities embedded in the BS in Data Science & AI program at IIT Madras Zanzibar!",
  },
  {
    img: "/IITMZ-Webinar 2.png",
    startDate: "February 16 2024",
    regLink: "https://tinyurl.com/iitmz-web2",
    name: "Discover IITM Zanzibar - Africa Edition Special Webinar",
    time: "05:00 PM EAT | 07:30 PM IST",
    location: "Virtual",
    desc: "This Discover IITM Zanzibar will focus on living & learning at the IITM Zanzibar Campus, especially for BS Students. All African Nationals studying & working in other countries are also welcome to join this webinar! Join the webinar to hear from the 1st cohort of students in BS Program on why you need to choose the IIT Madras Zanzibar Campus for your Undergraduate Studies!",
  },
  {
    img: "/Webinar6.png",
    startDate: "March 24 2024",
    regLink:
      "https://us06web.zoom.us/webinar/register/WN_i4qUriBvTLKuj_22-fmSbg",
    name: "An Inside Story: Experiences of Our First Batch Students",
    time: "06:30 PM IST | 04:00 PM EAT",
    location: "Virtual",
    desc: "The Webinar offers a unique opportunity to delve into the vibrant and enriching experiences of current students at IIT Madras Zanzibar. During the webinar, students will take center stage as they share their journeys and perspectives on studying at this world-class institution.",
  },
  {
    img: "/stemv2.jpeg",
    startDate: "July 28 2024",
    regLink: "https://bit.ly/STEM_IITMZ_Registration",
    name: "'Discover STEM’ Program",
    time: "06:30 PM IST | 04:00 PM EAT",
    location: "IIT Madras, Zanzibar Campus",
    desc: "The 'Discover STEM' Program at IIT Madras Zanzibar, conducted by GenWise, is a residential camp for students completing grade 10, 11 or 12. Running from July 28 to August 9, 2024, it offers modules on Engineering Design and Astrophysics, and expert talks in various STEM areas. Participants will also enjoy the IITM-Zanzibar campus and Zanzibar island's beauty. The program helps students discover strengths, make career choices, develop critical skills, and find a community of peers and mentors. The fee is US$ 1190 (early bird price: US$ 990 by June 26, 2024). Eligibility: exam scores, teacher recommendation, or top 85th percentile in ASSET.",
    links: [
      {
        title: "View More Information",
        link: "https://www.giftedworld.org/discover-stem",
      },
      {
        title: "View Webinar Details",
        link: "https://www.giftedworld.org/discover-stem#webinar"
      }
    ],
  },
  {
    img: "/ai-workshop .jpg",
    startDate: "June 7 2024",
    endDate: "June 8 2024",
    regLink: "https://forms.gle/bAGtxZGZMsYYoDy38",
    name: "Artificial Intelligence for All: An Introductory Workshop",
    slug: "ai_for_all_workshop_iitmz_dit",
    time: "09:30 AM | 05:30 PM EAT",
    location: "Dar es Salaam Institute of Technology, Dar es Salaam",
    desc: "Join us for the 'AI for All: An Introductory Workshop' on 7-8 June 2024, from 9:30 am to 5:30 pm (EAT) at the Dar es Salaam Institute of Technology. This free workshop, led by experts from Indian Institute of Technology Madras Zanzibar and Dar es Salaam Institute of Technology, offers an in-depth exploration of Data Science, Artificial Intelligence, and Natural Language Processing. Engage in hands-on practical sessions covering essential topics such as mathematical foundations, descriptive statistics, data visualization, regression techniques, classification methods, and unsupervised learning. Participants will receive a certificate recognizing their newly acquired skills. Don't miss this opportunity to delve into the world of AI",
    links: [
      {
        title: "Download Workshop Brochure",
        link: "/Artificial-Intelligence-for-All-An-Introductory-Workshop.pdf",
      },
    ],
    contactInfo: {
      email: ["infodesk@iitmz.ac.in", "haji.fimbombaya@dit.ac.in"],
      phone: ["+255 755 977871"],
    },
    schedule: [
      {
        day: "1",
        time: "9.15- 10:00",
        track: "Registration of Participants",
        subtracks: [],
      },
      {
        day: "1",
        time: "10.00 - 11:00",
        track: "Research Talk I: Overview of DS and AI by Ramkrishna",
        subtracks: [],
      },
      {
        day: "1",
        time: "11.15 - 12:15",
        track:
          "Introduction to Matrices, Descriptive Statistics, and Data Visualization by Ramkrishna",
        subtracks: [
          "Revisiting concepts of linear algebra and Probability",
          "Introduction to random variables, Probability mass/density functions",
        ],
      },
      {
        day: "1",
        time: "14:00 - 15:30",
        track: "Data Visualization by Mwalongo",
        subtracks: [
          "Data types, format, random, sample statistics, correlations, variance, covariances",
          "Different types of visualization plots",
        ],
      },
      {
        day: "1",
        time: "16:00 - 17:30",
        track: "Inferential Data Analysis by Sailash",
        subtracks: [
          "Z-statistics, t-statistics, chi-square statistics, F-statistics",
          "Hypothesis testing and inferences",
        ],
      },
      {
        day: "2",
        time: "9.30 - 10.30",
        track: "Research Talk - II: Overview of NLP and AI by Nirav",
        subtracks: [],
      },
      {
        day: "2",
        time: "10:45 - 11:45",
        track: "Introduction to Regression Techniques by Isakwisa",
        subtracks: [
          "Simple linear regression, Multiple linear regression,  Ridge Regression, Cross-validations",
        ],
      },
      {
        day: "2",
        time: "12:00 - 13:00",
        track: "Introduction to Classification Techniques by Nirav",
        subtracks: [
          "Logistic regression, Naive Bayes Classification, Performance measures",
        ],
      },
      {
        day: "2",
        time: "14:00 - 15:00",
        track: "Introduction to Unsupervised Learning Techniques by Tushar",
        subtracks: [
          "Clustering approaches such as k-mean, Hierarchical clustering",
        ],
      },
      {
        day: "2",
        time: "15:15 - 16:30",
        track: "Hands-on Session by Tushar, Shashwat",
        subtracks: [],
      },
      {
        day: "2",
        time: "17:00 - 17:30",
        track: "Certificate Distribution",
        subtracks: [],
      },
    ],
    speakers: [
      {
        name: "Prof. Ramkrishna Pasumarthy",
        img: "/ramkrishna.png",
        position: "Program Chair - BS in DS & AI, IITM Zanzibar",
      },
      {
        name: "Dr. Isakwisa G. Tende",
        img: "https://placehold.co/400",
        position: "",
      },
      {
        name: "Dr. Finian Mwalongo",
        img: "https://placehold.co/400",
        position: "",
      },
      {
        name: "Dr. Nirav Bhatt,",
        img: "/nirav-1.jpg",
        position: "Program Chair - MTech in DS & AI",
      },
      {
        name: "Dr. Tushar Shinde",
        img: "/tushar.JPG",
        position: "Faculty - School of Engg. & Science",
      },
      {
        name: "Mr. Sailash Moirangthem",
        img: "https://placehold.co/400",
        position: "",
      },
    ],
    otherInfo: [
      {
        title: "Who can participate",
        desc: "Undergraduate, Masters and PhD students, Faculty members, and Industry",
      },
      {
        title: "Certificate of Participation",
        desc: "Receive a certificate acknowledging your participation and your newly acquired skills.",
      },
    ],
  },
  {
    img: "/image (1).png",
    startDate: "February 18, 2025",
    endDate: "February 21, 2025",
    regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfYZwqs8pWSVGfYHJFDDbdUt92z6oVr6sjrgVbIFY6wHcOECA/viewform",
    name: "Workshop on Advances in Concrete Technology",
    time: "9.30 AM IST | 5.30 PM EAT",
    location: "IITM Zanzibar, Bweleo, Zanzibar",
    desc: "The Workshop will cover Cement, Types and Basics of Hydration, Testing of cement and quality control issues, Aggregates, testing and quality control, Unconventional components of concrete (supplementary cementitious materials, chemical admixtures), Mix design principles, Chemical admixtures and how to use them effectively; Fresh concrete – properties and precautions, Mechanical properties, Good construction practices, Durability and long-term performance, and Sustainable practices.",
    links: [
      {
        title: "View More Information",
        link: "https://www.rilem.net/agenda/workshop-on-advances-in-concrete-technology-1696",
      },
    ],
  },
  {
    img: "/IITMZ-Web-2.png",
    startDate: "February 20, 2025",
    regLink:
      "https://us06web.zoom.us/webinar/register/WN_QfDmyTKERCKTu3KcUOIR_w",
    name: "Discover Global Learning Opportunities at IITM Zanzibar",
    time: "05:00 PM EAT | 07:30 PM IST",
    location: "Virtual",
    desc: "Join our exclusive webinar to explore how IITM Zanzibar offers a world-class academic experience in a vibrant, international environment. Learn how our programs blend cutting-edge education, industry exposure, and hands-on learning to prepare students for global careers. Engage with faculty and students to gain insights into campus life, research opportunities, and the future of AI and technology. The webinar is open to students worldwide - don’t miss this chance to be part of a truly global learning experience!",
  },
  {
    img: "/Poster-Digital-Education-Workshops.jpg",
    startDate: "May 19, 2025",
    endDate: "May 22, 2025",
    regLink:
      "https://forms.gle/gDHp4xQKNaKZbKAt8",
    name: "Empowering Zanzibar Through Digital Education",
    time: "10:00 AM IST",
    location: "IIT Madras, Zanzibar Campus",
    desc: "Spoken Tutorial, an award-winning edtech platform from IIT Bombay, has trained over 9 million students in IT over the past 13 years. In collaboration with IITM Zanzibar, it now offers a series of self-paced, hands-on workshops to equip students and the local community with essential digital skills to thrive in today’s fast-changing world.",
  },
  {
    img: "/IITMZ-Webinar-Uganda.png",
    startDate: "May 23, 2025",
    endDate: "May 23, 2025",
    regLink:
      "https://us06web.zoom.us/webinar/register/WN_t7YR3LmPTYKkh_1oXAQ_sw",
    name: "Discover Global Education at IITM Zanzibar",
    time: "08:00 PM IST",
    location: "Virtual",
    desc: "Join us for an insightful webinar featuring professors from the Indian Institute of Technology Madras – Zanzibar Campus. They will share valuable perspectives on our distinctive curriculum, the vibrant student life and learning environment at IITM Zanzibar, as well as important details about the admission process, available scholarships, and future career opportunities. The session will also include a live Q&A, giving you the chance to ask your questions directly and gain deeper clarity.",
  },
  {
    img: "/IITMZ-Webinar-Zambia.png",
    startDate: "May 29, 2025",
    endDate: "May 29, 2025",
    regLink:
      "https://us06web.zoom.us/webinar/register/WN_VSrbA-cXQKW3gevrTl2JOA",
    name: "Discover Global Education at IITM Zanzibar",
    time: "09:00 PM IST",
    location: "Virtual",
    desc: "Join us for an insightful webinar featuring professors from the Indian Institute of Technology Madras – Zanzibar Campus. They will share valuable perspectives on our distinctive curriculum, the vibrant student life and learning environment at IITM Zanzibar, as well as important details about the admission process, available scholarships, and future career opportunities. The session will also include a live Q&A, giving you the chance to ask your questions directly and gain deeper clarity.",
  },
];


export default eventsList;

export type EventsType = typeof eventsList;