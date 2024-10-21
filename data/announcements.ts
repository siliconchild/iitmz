interface Announcement {
  title: string;
}

type AnnouncementsArray = Announcement[];

const announcements: AnnouncementsArray = [
  // {
  //   title: "BS Application closing {{DAYS_LEFT,2024-04-30}}",
  // },
  // {
  //   title:
  //     "Selected BS & MTech candidates are requested to email 'admissions@iitmz.ac.in' for any queries",
  // },
  // {
  //   title:
  //     "MTech Ocean Structures & MTech Data Science & AI- Candidates are requested to check their emails for admission status and further steps",
  // },
  // {
  //   title:
  //     "MTech Data Science & AI - Application Deadline has been extended to July 20, 2024",
  // },
  {
    title:
      "BS & MTech classes have started from Oct' 24",
  },
  {
    title:
      "Admissions for the AY 2025-26: BS & MTech programs will start from 1 Feb 2024",
  },
];

export default announcements;
