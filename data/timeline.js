import { FaCalendarAlt, FaCalendarTimes, FaPencilAlt, FaUserCheck } from "react-icons/fa";

const timelineData = [
  {
    date: "Jan 10, 2025",
    event: "Applications Open",
    icon: <FaCalendarAlt />,
    status: "upcoming",
  },
  {
    date: "May 31, 2025",
    event: "Applications Close",
    icon: <FaCalendarTimes />,
    status: "upcoming",
  },
  {
    date: "May 04, 2025",
    event: "Screening Test Option 1",
    icon: <FaPencilAlt />,
    status: "upcoming",
  },
  {
    date: "July 13, 2025",
    event: "Screening Test Option 2",
    icon: <FaPencilAlt />,
    status: "upcoming",
  },
  {
    date: "May & July 2025",
    event: "Dates of Interview",
    icon: <FaUserCheck />,
    status: "upcoming",
  },
];

export default timelineData;
