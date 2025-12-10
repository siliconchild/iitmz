import styles from "./governing-council.module.scss";
import Img from "./image";
import Button from "./button";
import Link from "next/link";

export const StaffMember = [
  {
    name: "Ms. Mshauri Abdulla Juma",
    title: "Registrar",
    img: "/staff/MSHAURI ABDULLA KHAMIS (Registrar).jpg",
  },
  {
    name: "Ms. Kauthar Jumaane Karama",
    title: "Finance Manager",
    img: "/staff/KAUTHAR JUMANNE KARAMA (FM).jpg",
  },
  {
    name: "Ms. Mwatima Rashid Issa",
    title: "Public Relation Officer",
    img: "/staff/MWATIMA ISSA (PRO).jpg",
  },
  {
    name: "Ms. Salama Kombo Khamis",
    title: "Executive Assistant to Director-in-charge",
    img: "/staff/SALAMA KOMBO KHAMIS (EAD).jpg",
  },
  {
    name: "Ms. Salma Mohammed Abdallah",
    title: "Human Resource Manager",
    img: "/staff/SALMA M. ABDALLAH (HR MANAGER).jpg",
  },
  {
    name: "Ms. Yumna Mohamed Abdalla",
    title: "Human Resource Assistant",
    img: "/staff/YUMNA MOHAMED ABDALLA (HR ASSISTANT).jpg",
  },
  {
    name: "Mr. Abdulla Juma Abdulla",
    title: "Sports Officer",
    img: "/staff/ABDULLA J. ABDULLA.jpg",
  },
  {
    name: "Mr. Joachim Stephen Amlima",
    title: "IT Specialist",
    img: "/staff/joachim.jpeg",
  },
  {
    name: "(Late) Mr. Hassan Soud",
    title: "Institute Driver",
    img: "/placeholder.jpg",
  },
  {
    name: "Mr. Ibadi Muhudhar Ibadi",
    title: "Institute Driver",
    img: "/staff/IBADI MUHUDHAR IBADI (DRIVER).jpg",
  },
  {
    name: "Mr. Mahafudhi Makame Ali",
    title: "Institute Driver",
    img: "/staff/MAHAFUDHI MAKAME ALI (BUS DRIVER).jpg",
  },
  {
    name: "Mr. Abdulla Salim Mohamed",
    title: "Institute Driver",
    img: "/staff/ABDULLA SALIM MOHAMED (DIC DRIVER)-1.jpg",
  },
];

export default function StaffList() {
  return (
    <div className={styles.section}>
      <h2 className="section-title center">Administrative & Support Staff</h2>
      <div className="container">
        <div className={styles.flex_grid}>
          {StaffMember.map((member) => (
            <div key={member.img} className={styles.card}>
              <Img
                src={member.img}
                alt={`Picture of ${member.name}`}
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
              />

              <div className={styles.body}>
                <h2>{member.name}</h2>
                <h4>{member.title}</h4>
              </div>

              {/* Conditionally render button only for (Late) Mr. Hassan Soud */}
              {member.name === "(Late) Mr. Hassan Soud" && (
                <Link
                  target="_blank"
                  href="https://padlet.com/iitm_zanzibar/in-loving-memory-of-our-rafiki-hassan-soud-j3kxbn8t5aig9547"
                >
                  <Button kind="SECONDARY">Know More</Button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
