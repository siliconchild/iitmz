import styles from "./governance-board.module.scss"
import Img from "./image";

export const governanceBoardMember = [
  {
    name: "Prof. Mohamed Sheikh",
    title:
      "Director, Department of Research, Training and Extension, Ministry of Livestock and Fisheries.",
    img: "/Mohamed-Sheikh.png",
  },
  {
    name: "Prof. Raghunathan Rengaswamy",
    title: "Dean, Global Engagement, IIT Madras",
    img: "/prof-raghu.jpg",
  },
  {
    name: "Prof: Hamed R. H. Hikmany",
    title: "Principal, Zanzibar School of Health",
    img: "/Prof-Hamed-R-H-Hikmany.jpg",
  },
  {
    name: "Prof Ligy Philip",
    title:
      "Professor, Civil Engg., IIT Madras, former Dean (planning), IIT Madras and Professor-in-charge (Infrastructure), IITM Zanzibar",
    img: "/ligy-1.png",
  },
  {
    name: "Prof. Mussa J. Assad",
    title:
      "Deputy Vice Chancellor [Administration and Finance] and acting Vice Chancellor Muslim University of Morogoro (MUM)",
    img: "/Prof-Mussa-J-Assad.jpeg",
  },
  {
    name: "Prof. Elisante Ole Gabriel",
    title: "Tanzania Chief Court Administrator",
    img: "/elisante-ole-gabriel-large.jpeg",
  },
  {
    name: "Dr. Said Ally Khamis",
    title: "Executive Secretary - National Examination Council Tanzania(NECTA)",
    img: "/Dr.-Said-Ally-Khamis.jpg",
  },
  {
    name: "Prof. Maulilio John Kipanyula",
    title:
      "Vice Chancellor of the Nelson Mandela Africa Institute of Science and Technology",
    img: "/Prof-Maulilio-John-Kipanyula.jpg",
  },
  {
    name: "Dr. Asha Rose Migiro",
    title: "Former Ambassador of UK",
    img: "/Dr-Asha-Rose-Migiro.jpg",
  },
  {
    name: "Prof Devang Khakhar",
    title:
      "Professor, Chemical Engg., IIT Bombay and former director, IIT Bombay",
    img: "/Prof-Devang-V-Khakhar.jpg",
  },
  {
    name: "Prof Bhaskar Ramamurthi",
    title:
      "Professor, Electrical Engg., IIT Madras and former director, IIT Madras",
    img: "/Prof.-Bhaskar-Ramamurthi.jpeg",
  },
  {
    name: "Prof. Ganapathi Ramachandran",
    title:
      "Chairman and Non-Executive Director,Trigyn Technologies Limited; President -SICCI & Co-Chair FICCI Africa Council",
    img: "/Prof-Ganapathi-Ramachandran.jpeg",
  },

  {
    name: "Prof. Preeti Aghalayam",
    title:
      "Director-in-charge Dean of School of Engg. & Science Zanzibar campus, IIT Madras",
    img: "/preeti.jpg",
  },
];

export default function GovernanceBoard() {
    return (
      <div className={styles.section}>
        <h2 className="section-title center">Governance Board</h2>
        <div className="container">
          <div className={styles.flex_grid}>
            {governanceBoardMember.map((member) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
