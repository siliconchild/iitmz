interface Announcement {
  title: string;
}

type AnnouncementsArray = Announcement[];

const announcements: AnnouncementsArray = [
  {
    title:
      "Admissions for A.Y. 2024-25 for BS & MTech programs in Data Science & AI are live. Apply Now!",
  },
  {
    title: "BS Application closing {{DAYS_LEFT,2024-04-15}}",
  },
  {
    title: "MTech Application closing {{DAYS_LEFT,2024-03-18}}",
  },
];

export default announcements;
