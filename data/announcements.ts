interface Announcement {
  title: string;
}

type AnnouncementsArray = Announcement[];

const announcements: AnnouncementsArray = [
  // {
  //   title: "BS Application closing {{DAYS_LEFT,2024-04-30}}",
  // },
  {
    title:
      "BS Results are out. Candidates are asked to check their registered email for the results",
  },
	{
		title: "MTech Ocean Structures - Application Deadline has been extended to July 20, 2024",
	},
  {
    title:
      "MTech Data Science & AI - Application Deadline has been extended to July 20, 2024",
  },
];

export default announcements;
