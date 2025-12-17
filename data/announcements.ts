export interface Announcement {
  activeTill: string;
  content: string;
  linkText: string;
  linkUrl: string;
}

export type Announcements = Announcement[];

export const announcements: Announcements = [
  {
    activeTill: "2026-04-30",
    content: "BS & M.Tech. Admissions for the academic year 2026–27 are open now",
    linkText: "Apply Now",
    linkUrl: "https://admissions.iitmz.ac.in/",
  },
];
