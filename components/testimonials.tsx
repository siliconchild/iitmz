import styles from "./testimonials.module.scss";
import { AiTwotoneStar } from "react-icons/ai";
import { FaUserCircle as Avatar } from "react-icons/fa";
import Img from "./image";
import Slider, { SliderProps } from "./slider";

type TestimonialsProps = Omit<SliderProps, "children"> & {
  type: "PRIMARY" | "SECONDARY";
};

export default function Testimonials({ ...props }: TestimonialsProps) {
  return (
    <section className={props.type === "PRIMARY" ? `` : styles.secondary}>
     <center><iframe src="https://fm.addxt.com/form/?vf=1FAIpQLScEjJBhTLHZCDUQzyF6bJQPr6cNxswlzuXorbXHMcih2kFLeQ" style={{width: 1080, height: 1240, border: 0, margin: 0}} >Loading…</iframe></center>
      <Slider {...props}>
        <div className={styles.item}>
          <div className={styles.quote}>
            <Img
              src="/img/testimonial/quotes.png"
              height={36}
              width={50}
              alt=""
            />
          </div>
          <div className={styles.header}>
            <Img
              src="/testimony-kemal.jpeg"
              height={52}
              width={52}
              alt="Testimonial Reviewer Picture"
            />
            <div>
              <h4>Kemal Mudie Tosora</h4>
              <span>I2MP Data Science</span>
            </div>
          </div>

          <div className={styles.body}>
            <h3>An Enriching Journey</h3>
            <p>
              As an international student pursuing an MTech in Data Science at
              IIT Madras, my campus life has been amazing. The vibrant and
              diverse student community, along with the breathtaking natural
              beauty, have made my experience here truly memorable. I have grown
              and learned in a multicultural environment, broadening my
              horizons. The excellent research opportunities at IIT Madras have
              deepened my understanding in my field of study. Overall, I am
              grateful for this enriching experience at such a remarkable
              institution.
            </p>
          </div>
          <div className={styles.icon}>
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.quote}>
            <Img
              src="/img/testimonial/quotes.png"
              height={36}
              width={50}
              alt=""
            />
          </div>
          <div className={styles.header}>
            <Img
              src="/testimony-mercy.jpeg"
              height={52}
              width={52}
              alt="Testimonial Reviewer Picture"
            />
            <div>
              <h4>Mercy Mwambegu</h4>
              <span>MS Mechanical Engineering</span>
            </div>
          </div>

          <div className={styles.body}>
            <h3>Incredible Experience!</h3>
            <p>
              I am a Kenyan MS student pursuing a masters by Research in
              Mechanical Engineering at IITM. The university&lsquo;s diversity
              and global community have exposed me to different cultures. Its
              well-equipped labs and workshops offer a practical approach to
              engineering. The academic system encourages exploration and
              pursuing diverse interests. The knowledgeable faculty and research
              community readily share their expertise. Beyond academics, IITM
              provides opportunities for personal growth through sports and
              clubs.
            </p>
          </div>
          <div className={styles.icon}>
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.quote}>
            <Img
              src="/img/testimonial/quotes.png"
              height={36}
              width={50}
              alt=""
            />
          </div>
          <div className={styles.header}>
            <Img
              src="/testimony-peter.jpeg"
              height={52}
              width={52}
              alt="Testimonial Reviewer Picture"
            />
            <div>
              <h4>Peter Waiyaki</h4>
              <span>MS Sustainable Energy Systems</span>
            </div>
          </div>
          <div className={styles.body}>
            <h3>Amazing opportunity</h3>
            <p>
              IIT Madras is not just an education hub, but a growth hub for me.
              It has helped me discover my true self while pursuing my academic
              dream. The supportive community at IIT Madras feels like a home
              away from home. The wide range of opportunities, both in academics
              and extracurriculars, have pushed me to step out of my comfort
              zone, becoming a more determined risk-taker and critical thinker.
              At IIT Madras, growth and fulfillment are assured, depending on
              individual effort.
            </p>
          </div>
          <div className={styles.icon}>
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </div>
        </div>
      </Slider>
    </section>
  );
}
