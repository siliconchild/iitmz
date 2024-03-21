import styles from "./page.module.scss";
import Img from "@/components/image";
import Link from "next/link";
import Maps from "@/components/map";
import Slider from "@/components/slider";
import { FaMapMarkerAlt} from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";

export const metadata = {
  title: "Discover Our Campus",
  description:
    "Experience an Enriching Campus Life at IIT Madras Zanzibar. Diverse Clubs, Sports, Cultural Events, And Excellent Facilities Await. Learn More.",
  alternates: {
    canonical: `campus-life`,
  },
};

export default function CampusLife() {
  return (
    <>
      <section className={styles.campus}>
        <div className="container">
          <div className={styles.content}>
            <h1>
              Discover <br /> Our Campus
            </h1>
            <p>
              At IITM Zanzibar, campus life is an integral part of the
              educational experience. Our stimulating environment encourages
              personal growth, community, and exploration. With diverse student
              clubs, sports facilities, cultural events, support services, and a
              serene atmosphere, students can thrive academically, socially, and
              personally.
            </p>
            <p>
              The IIT Madras Zanzibar campus will comprise four large classrooms
              and several smaller classrooms. Laboratory spaces will cater to
              the needs of the students, and include computers, physics and
              chemistry. Students will be accommodated on campus in hostel
              (dorm) rooms and have access to a dining hall, a multipurpose
              store, a smart seminar hall and an auditorium as well.
            </p>
          </div>
          <div className={styles.images}>
            <Link target="_blank" href="/cl_2.jpg">
              <Img
                width={200}
                height={180}
                src="/cl_2.jpg"
                alt=""
                loading="eager"
              />
            </Link>
            <Link target="_blank" href="/cl_3.jpg">
              <Img
                width={200}
                height={360}
                src="/cl_3.jpg"
                alt=""
                loading="eager"
              />
            </Link>
            <Link target="_blank" href="/cl_4.jpg">
              <Img
                width={200}
                height={180}
                src="/cl_4.jpg"
                alt=""
                loading="eager"
              />
            </Link>
          </div>
        </div>
      </section>
      <div className={styles.gallery}>
        <Slider slidesToShow={3}>
          {Array.from({ length: 12 }, (_, index) => (
            <Img
              key={`image__${index}`}
              src={`/campus-life-scroll-images/${index + 1}.jpg`}
              width={450}
              height={350}
              alt="Image of IITM Zanzibar Campus"
            />
          ))}
        </Slider>
      </div>
      <div className="container">
        <div className={styles.map}>
          <div className={styles.addresscontainer}>
            <div className={styles.address}>
              <h3>Campus Location</h3>
              <div className={styles.addressfield}>
                <div>
                  <FaMapMarkerAlt />
                  <h4>Address</h4>
                </div>
                <span>
                  IIT Madras Zanzibar Campus
                  <br /> PO Box 394, Bweleo,
                  <br /> Urban West - 71215 <br />
                  Zanzibar, Tanzania
                </span>
              </div>
              <div className={styles.contactfield}>
                <div>
                  <IoMdMailOpen />
                  <h4>General Query Email</h4>
                </div>
                <span>infodesk@iitmz.ac.in</span>
              </div>
              <div className={styles.contactfield}>
                <div>
                  <IoMdMailOpen />
                  <h4>Admissions Email</h4>
                </div>
                <span>admissions@iitmz.ac.in</span>
              </div>
              {/* <div className={styles.contactfield}>
                <h3>Phone</h3>
                <div>
                  <FaPhone />
                  <span>+1 234 567 8900</span>
                </div>
              </div> */}
            </div>
            <div className={styles.mapcontainer}>
              <Maps />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
