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
      "BS selection process is underway. Candidates are requested to check their registered email for next steps",
  },
	{
		title: "MTech Data Science & AI - Application Deadline has been extended to July 05, 2024",
	},
  {
    title:
      "MTech Ocean Structures - Application Deadline has been extended to June 30, 2024",
  },
];

export default announcements;
