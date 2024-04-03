import styles from "./page.module.scss";
import Img from "@/components/image";
import Maps from "@/components/map";
import Slider from "@/components/slider";
import { FaMapMarkerAlt } from "react-icons/fa";
import {IoMdMailOpen } from "react-icons/io"

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
              IIT Madras Zanzibar Campus is a hub of vibrant student life,
              pulsating with energy and enthusiasm. Our students are not just
              learners but active participants in shaping their academic journey
              and beyond. From engaging in stimulating technical seminars to
              organizing campus runs and small marathons, our students are
              always on the move, embracing challenges and pushing boundaries.
            </p>
          </div>
          <div className={styles.images}>
            <Img
              width={1200}
              height={600}
              src="/campus-life-main.jpg"
              alt=""
              loading="eager"
            />
          </div>
          <div className={styles.itemGrid}>
            <div className={styles.itemSection}>
              <div className={styles.itemInfo}>
                <h3>Student Life</h3>
                <p>
                  At IITM Zanzibar Campus, the spirit of social responsibility
                  is deeply ingrained in our campus culture. Students
                  enthusiastically volunteer for various social activities,
                  lending a helping hand to the local community and making a
                  meaningful impact. At the same time, the campus is a fertile
                  ground for leadership development and training opportunities.
                  Students actively participate in leadership programs, honing
                  their skills and preparing themselves for future roles. This
                  dynamic environment, coupled with the unwavering support and
                  guidance from faculty and staff, empowers our students to
                  drive student-led programs and initiatives, creating a
                  thriving ecosystem of innovation and collaboration.
                </p>
              </div>
              <div className={styles.itemImages}>
                <Slider slidesToShow={1} showTracks={true}>
                  {Array.from({ length: 6 }, (_, index) => (
                    <Img
                      key={`image__${index}`}
                      // src={`/student-life/${index + 1}.jpg`}
                      src={`/student-life/${index + 1}.jpg`}
                      width={450}
                      height={350}
                      alt="Image of IITM Zanzibar Campus"
                    />
                  ))}
                </Slider>
              </div>
            </div>
            <div className={styles.itemSection}>
              <div className={styles.itemInfo}>
                <h3>Clubs & Activities</h3>
                <p>
                  At IIT Madras Zanzibar Campus, the student club scene is a
                  bustling ecosystem of creativity and innovation. From the
                  adrenaline-pumping runs organized by the Running Club to the
                  cutting-edge projects of the Robotics Club, every interest
                  finds a vibrant home here. These clubs aren&rsquo;t just about
                  extracurricular activities; they&rsquo;re pathways to personal
                  growth and community enrichment. Led by passionate student
                  leaders and supported by dedicated faculty champions, the
                  clubs at IITMZ offer an ocean of opportunities to explore
                  diverse interests. Whether it&rsquo;s designing autonomous robots or
                  organizing cultural festivals, students at IITM Zanzibar are
                  constantly pushing boundaries and creating an intellectually
                  stimulating environment that enhances their overall campus
                  experience.
                </p>
              </div>
              <div className={styles.itemImages}>
                <Slider slidesToShow={1} showTracks={true}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Img
                      key={`image__${index}`}
                      // src={`/student-life/${index + 1}.jpg`}
                      src={`/clubs-and-activities/${index + 1}.jpg`}
                      width={450}
                      height={350}
                      alt="Image of IITM Zanzibar Campus"
                    />
                  ))}
                </Slider>
              </div>
            </div>
            <div className={styles.itemSection}>
              <div className={styles.itemInfo}>
                <h3>Residence Life</h3>
                <p>
                  Residential life at IIT Madras Zanzibar Campus is a vibrant
                  blend of community, diversity, and academic excellence. Our
                  student residences provide a nurturing and supportive
                  environment where students from various backgrounds come
                  together to learn, grow, and create lasting friendships. The
                  Director & Matron office works tirelessly to ensure a safe and
                  inclusive atmosphere, while students play a vital role in
                  upholding the campus&rsquo;s hostel life policies, fostering a sense
                  of responsibility and belonging among residents.
                </p>
              </div>
              <div className={styles.itemImages}>
                <Slider slidesToShow={1} showTracks={true}>
                  {Array.from({ length: 2 }, (_, index) => (
                    <Img
                      key={`image__${index}`}
                      src={`/residence-life/${index + 1}.jpg`}
                      width={450}
                      height={350}
                      alt="Image of IITM Zanzibar Campus"
                    />
                  ))}
                </Slider>
              </div>
            </div>
            <div className={styles.itemSection}>
              <div className={styles.itemInfo}>
                <h3>Sports and Exercise</h3>
                <p>
                  At IIT Madras Zanzibar Campus, the sports scene is nothing
                  short of exhilarating! From intense gym sessions to friendly
                  cricket matches with local youths, every day is infused with
                  energy and camaraderie. The campus offers facilities for
                  cricket, football, badminton, and more, encouraging students
                  to explore their athletic passions. Daily running activities
                  involving both students, faculty & staff members create a
                  vibrant atmosphere that fosters personal growth and teamwork.
                  This holistic approach to sports not only promotes physical
                  fitness but also nurtures a sense of community and global
                  citizenship among students, making their time at IITM Zanzibar
                  truly transformative.
                </p>
              </div>
              <div className={styles.itemImages}>
                <Slider slidesToShow={1} showTracks={true}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Img
                      key={`image__${index}`}
                      src={`/sports-and-exercise/${index + 1}.jpg`}
                      width={450}
                      height={350}
                      alt="Image of IITM Zanzibar Campus"
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* <div className={styles.gallery}>
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
      </div> */}
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
      </section>
    </>
  );
}
