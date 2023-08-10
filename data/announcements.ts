interface Announcement {
  title: string;
}

type AnnouncementsArray = Announcement[];

const announcements: AnnouncementsArray = [
  {
    title:
      "Sample question papers for BS & MTech in DS & AI are available for Download in the Admissions 2023 Sidebar Widget",
  },
  {
    title:
      "Applications deadline is extended till 12th August. Hurry! Applications are closing in {{DAYS_LEFT,2023-08-12}}. Apply Now!",
  },
  {
    title:
      "Contest Winners Announced: Shirllie Praise Apiyo, Irfan Khan, Alekhya Purkait, Aashish Charles, Arua mercy Orieoma",
  },
];

export default announcements;
