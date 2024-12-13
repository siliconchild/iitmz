interface Announcement {
  title: string;
}

type AnnouncementsArray = Announcement[];

const announcements: AnnouncementsArray = [
  // {
  //   title: "BS Application closing {{DAYS_LEFT,2024-04-30}}",
  // },
  {
    title: "Admissions for the AY 2025-26: BS & MTech full-time degree programs will start from 1 Feb 2024",
  },
  {
    title:
      "MTech Industrial AI (Web-Enabled) Application Form is Live - <a href='https://admissions.iitmz.ac.in/iitmz-mtechiai' target='_blank'><strong>&nbsp;Apply Now</strong></a>",
  },
];

export default announcements;
