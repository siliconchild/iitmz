interface Announcement {
  title: string;
}

type AnnouncementsArray = Announcement[];

const announcements: AnnouncementsArray = [
  // {
  //   title: "BS Application closing {{DAYS_LEFT,2024-04-30}}",
  // },
  {
    title: "Application Duration for the BS & MTech programs: Jan 10 - May 31, 2025 -  <a href='https://admissions.iitmz.ac.in/' target='_blank'><strong>&nbsp;Click here</strong></a> to know more"
  },
  {
    title: "Admissions for the AY 2025-26: BS & MTech full-time degree programs starts from Jan 10, 2025 -  <a href='https://admissions.iitmz.ac.in/' target='_blank'><strong>&nbsp;Apply Now</strong></a>"
  },
  {
    title: "More details on the programs offered and complete admission process -  <a href='https://www.iitmz.ac.in/admission' target='_blank'><strong>&nbsp;Click here</strong></a>"
  }
];

export default announcements;
