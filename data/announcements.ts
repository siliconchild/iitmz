interface Announcement {
  title: string;
}

type AnnouncementsArray = Announcement[];

const announcements: AnnouncementsArray = [
  {
    title:
      "Sample question papers for BS & MTech in DS & AI are available for Download in the Admissions 2023 Sidebar Widget",
  },
  // {
  //   title:
  //     "Applications deadline is extended till 12th August. Hurry! Applications are closing {{DAYS_LEFT,2023-08-12}}. Apply Now!",
  // },
  {
    title:
      "For MTech applications - Last date for exam registrations to the mandatory NPTEL courses is on 10/10/2023",
  },
];

export default announcements;
