import styles from "./fees.module.scss";
import { GiGraduateCap } from "react-icons/gi";
import { LuBedDouble } from "react-icons/lu";
import { RiHotelBedFill } from "react-icons/ri";

export default function Fees() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.tution}>
          <div className={styles.header}>
            <GiGraduateCap />
            <h2>Tuition Fee</h2>
          </div>
          <div className={styles.fee_container}>
            <div className={styles.fee}>
              <h3>BS in Data Science & AI</h3>
              <h4>USD 12000 / p.a.</h4>
            </div>
            <div className={styles.fee}>
              <h3>MTech in Data Science & AI</h3>
              <h4>USD 4000 / p.a.</h4>
            </div>
          </div>
        </div>
        <div className={styles.accomodation}>
          <div className={styles.header}>
            <RiHotelBedFill />
            <h2>Accommodation Fee</h2>
          </div>

          <ul>
            <div className={styles.fee}>
              <h3>Total</h3>
              <h4>USD 4000 / p.a.</h4>
            </div>
            <li>
              Hostel Admission Fee: <span>USD 100</span>
            </li>
            <li>
              Dining Charges:<span>USD 1800</span>
            </li>
            <li>
              Hostel Rent:<span>USD 1500</span>
            </li>
            <li>
              Amenities Charges Wi-fi, Laundry and other Incidentals
              <span>USD 350</span>
            </li>
            <li>
              Fees for Sports and other Facilities
              <span>USD 150</span>
            </li>
            <li>
              Student Wellness Fee
              <span>USD 100</span>
            </li>

            <p>
              Qualifying students will be eligible for attractive scholarships
              which will include tuition breaks. * Tuition fee waiver up to 80%
              will be available for meritorious candidates
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}
