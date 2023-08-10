import styles from "./page.module.scss";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className={styles.section}>
      <div className="container">
        <p>
          Thank you for visiting the web portal of IIT Madras Zanzibar and
          reviewing our privacy policy. When you visit our web portal, we do not
          collect any personal information, like names or addresses.
        </p>
        <h2>Google Analytics</h2>
        <p>
          We use Google Analytics to monitor and gather statistics on the use of
          this site. The information gathered is used to adjust our content to
          better in order to serve the needs of the viewer. The use and sharing
          of the information collected by Google Analytics about your visits to
          this site is subject to{" "}
          <Link
            target="_blank"
            href="https://marketingplatform.google.com/about/analytics/terms/us/"
          >
            Google Analytics Terms of Use
          </Link>{" "}
          and the{" "}
          <Link target="_blank" href="https://policies.google.com/privacy">
            Google Privacy Policy
          </Link>
          . You can prevent Google Analytics from recognizing you on return
          visits to this site by turning off cookies in the preferences settings
          in your browser. We never track or record information about
          individuals and their visits.
        </p>
        <h2>Cookies</h2>
        <p>
          When you visit some web portals, small pieces of software known as
          cookies may be downloaded on your computer/browsing device. Some
          cookies collect personal information to recognise your computer during
          future visits. Cookies do not permanently record data and are not
          stored on your computer&rsquo;s hard drive; but are stored in memory
          and are only available during an active browser session. The cookie
          disappears once you close your browsers. Our web portal never collects
          information or creates individual profiles for commercial marketing.
        </p>
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. All changes will
          be notified by posting the new Privacy Policy on this page. Please
          review this Privacy Policy periodically for any changes.
        </p>
        <h2>Contacting Us</h2>
        <p>
          If you have any questions about the Terms of Use, the practices of
          this site, or your dealings with this Web portal, you may contact the
          Institute using the details provided in the footer.
        </p>
      </div>
    </div>
  );
}
