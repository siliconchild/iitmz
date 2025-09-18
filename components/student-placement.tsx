"use client";

import { useState } from "react";
import styles from "./student-placement.module.scss";
// import Img from "./image";
import Img from "next/image";
import Button from "./button";
import Link from "next/link";

export function PlacementComp() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* About Section */}
        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>About IIT Madras Zanzibar</h2>
          </div>
          {/*<div className={styles.card}>
            <div className={styles.cardContent}>
              <p className={styles.textLarge}>
                The Indian Institute of Technology Madras (IIT Madras), an
                Institute of National Importance established in 1959, has
                extended its legacy of academic rigor and research excellence to
                Africa with the establishment of IIT Madras Zanzibar in 2023.
                This pioneering international IIT campus is a premier science
                and engineering institution that advances technical education
                and research across the continent.
              </p>
              <p className={styles.textMuted}>
                Located in Zanzibar, Tanzania, it offers cutting-edge programs
                in engineering and science, fostering innovation and leadership
                in a vibrant, multicultural environment that brings together
                students from India, Nepal, Tanzania, Kenya, and the Middle
                East.
              </p>
            </div>
          </div>*/}
          <div>
            <p className={styles.textLarge}>
              The Indian Institute of Technology Madras (IIT Madras), an
              Institute of National Importance established in 1959, has extended
              its legacy of academic rigor and research excellence to Africa
              with the establishment of IIT Madras Zanzibar in 2023. This
              pioneering international IIT campus is a premier science and
              engineering institution that advances technical education and
              research across the continent.
            </p>
            <p className={styles.textMuted}>
              Located in Zanzibar, Tanzania, it offers cutting-edge programs in
              engineering and science, fostering innovation and leadership in a
              vibrant, multicultural environment that brings together students
              from India, Nepal, Tanzania, Kenya, and the Middle East.
            </p>
          </div>
        </section>

        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>Our Philosophy</h2>
          </div>
          <div>
            <p className={styles.textLarge}>
              At IIT Madras Zanzibar, our philosophy is deeply rooted in the
              core values of academic rigor, innovation, and societal impact
              that define IIT Madras. We believe in providing a transformative
              educational experience that not only imparts cutting-edge
              knowledge in STEM fields but also cultivates critical thinking,
              problem-solving skills, and a strong sense of social
              responsibility. Our approach emphasizes interdisciplinary
              learning, fostering a dynamic environment where diverse
              perspectives converge to address complex global and regional
              challenges. We are committed to nurturing future leaders and
              innovators who will drive sustainable development and
              technological progress across Africa and beyond.
            </p>
          </div>
        </section>

        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>Our vision</h2>
          </div>
          <div>
            <p className={styles.textLarge}>
              Our vision for IIT Madras Zanzibar is to establish ourselves as a
              leading international hub for science, engineering, and
              technology, serving the evolving needs of Africa and the world. We
              aspire to be a beacon of academic excellence and research
              innovation, continuously expanding our program offerings to meet
              emerging demands in areas such as sustainability, advanced
              manufacturing, and digital transformation. We envision a vibrant,
              diverse, and inclusive campus that attracts top talent from across
              the globe, fostering a rich tapestry of cultures and ideas. In the
              long term, IIT Madras Zanzibar aims to be a catalyst for regional
              development, contributing significantly to human resource capacity
              building, fostering entrepreneurship, and driving impactful
              research that leads to real-world solutions for nation- building
              and global prosperity. We are committed to sustained growth, with
              plans for a permanent, state-of-the-art campus that embodies our
              commitment to sustainability and cutting-edge learning
              environments.
            </p>
          </div>
        </section>

        {/* Director's Message */}
        {/*<section>
          <div className={`${styles.sectionHeader} ${styles.directorHeader}`}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>Director&apos;s Message</h2>
          </div>

          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.messageContent}>
                <p className={styles.textRegular}>
                  As we embark on the third year of our journey, it is my
                  pleasure to welcome you to IITM&apos;s offshore campus in
                  Zanzibar, Tanzania. IITM Zanzibar was conceived in July 2023,
                  via a tripartite agreement between the Govts. of India and
                  Zanzibar, and India&apos;s top academic institution, IIT
                  Madras. From the signing of the document to the graduation of
                  our first batch of MTech students on 11 July 2025, every
                  moment in this beautiful campus has been memorable for us.
                </p>

                <p className={styles.textRegular}>
                  IIT Madras has enjoyed a place in high echelons of higher
                  education and academia for several decades now. The rigorous
                  curriculum and modern pedagogy, the stringent student and
                  faculty selection processes, and the unwavering commitment to
                  a well-rounded campus experience have enabled the remarkable
                  success of IITM&apos;s 60,000 strong alumni. Known for their
                  entrepreneurial spirit and innovation, our students represent
                  the modern global citizenry in myriad ways.
                </p>

                <div className={styles.academicBox}>
                  <h3 className={styles.academicTitle}>Academic Excellence</h3>
                  <div className={styles.academicGrid}>
                    <div className={styles.academicItem}>
                      <div className={styles.academicDot}></div>
                      <span>MTech Program: 190+ credits</span>
                    </div>
                    <div className={styles.academicItem}>
                      <div className={styles.academicDot}></div>
                      <span>Bachelor&apos;s Program: 430+ credits</span>
                    </div>
                  </div>
                  <p className={styles.academicNote}>
                    Internships and industrial engagements, within the umbrella
                    of academic credit requirements are strongly encouraged.
                  </p>
                </div>

                <p className={styles.textRegular}>
                  The professors who participate in teaching and mentoring are
                  remarkably committed academics, with top notch qualifications
                  from across the world. The students themselves are from
                  several countries – India, Zanzibar, and beyond – and are
                  selected based not only on their academic capabilities but
                  also their leadership skills, and an ability to participate
                  meaningfully in the global workforce.
                </p>

                <p className={styles.textRegular}>
                  The Data Science and Artificial Intelligence MTech is our
                  flagship program. Starting with intensive training in core
                  subjects during the first semester, students are exposed to
                  advanced topics in the second semester and beyond. Several
                  course projects provide students with a flavour of innovative
                  research, whereas the final two semesters are dedicated to a
                  long thesis project, building up on their base skills and
                  solving real world problems, with novel approaches.
                </p>

                <p className={styles.textRegular}>
                  The success of our first batch of graduates has been
                  multi-dimensional. Several of them participated and won awards
                  in hackathons, attended international conferences to present
                  papers, and were hired as interns in technology companies.
                  They have received final placements in companies across the
                  world and were also accepted into highly ranked PhD programs.
                  The diverse environment of IITM Zanzibar also enabled them to
                  develop a deep sense of community.
                </p>

                <div className={styles.quote}>
                  <p className={styles.quoteText}>
                    &quot;I am confident that our subsequent batches of students
                    will be no less in their achievements. With a strong first
                    year under their belt, and already several successes to
                    their name, the MTech batch of 2026, have been nothing short
                    of amazing. I am proud to welcome you to our campus, to
                    interact with our bright students, and explore opportunities
                    together.&quot;
                  </p>
                </div>

                <div className={styles.directorSignature}>
                  <div className={styles.directorInfo}>
                    <Img
                      src="/preeti.jpg"
                      alt="Prof. Preeti"
                      className={styles.directorAvatar}
                      width={120}
                      height={140}
                    />
                    <div>
                      <h4 className={styles.directorName}>
                        Prof. Preeti Aghalayam
                      </h4>
                      <p className={styles.directorTitle}>
                        Director, IITM Zanzibar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

        <section>
          <div className={`${styles.sectionHeader} ${styles.directorHeader}`}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>Director&apos;s Message</h2>
          </div>

          <div className={styles.directorSection}>
            {/* Director Profile */}
            <div className={styles.directorProfile}>
              <Img
                src="/preeti.jpg"
                alt="Prof. Preeti Aghalayam"
                width={100}
                height={100}
                className={styles.directorImage}
              />
              <Link
                href="https://www.iitmz.ac.in/schools/engineering-and-science/faculty/prof-preeti-aghalayam"
                target="_blank"
              >
                <h3 className={styles.directorName}>Prof. Preeti Aghalayam</h3>
                <p className={styles.directorTitle}>
                  Dean - School of Engg. & Science
                  <br />
                  Director-in-Charge
                </p>
              </Link>
            </div>

            {/* Director Message */}
            <div className={styles.directorMessage}>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={styles.messageContent}>
                    <p className={styles.textRegular}>
                      As we embark on the third year of our journey, it is my
                      pleasure to welcome you to IITM&apos;s offshore campus in
                      Zanzibar, Tanzania. IITM Zanzibar was conceived in July
                      2023, via a tripartite agreement between the Govts. of
                      India and Zanzibar, and India&apos;s top academic
                      institution, IIT Madras.
                    </p>

                    {isExpanded && (
                      <div className={styles.expandedContent}>
                        <p className={styles.textRegular}>
                          From the signing of the document to the graduation of
                          our first batch of MTech students on 11 July 2025,
                          every moment in this beautiful campus has been
                          memorable for us.
                        </p>

                        <p className={styles.textRegular}>
                          IIT Madras has enjoyed a place in high echelons of
                          higher education and academia for several decades now.
                          The rigorous curriculum and modern pedagogy, the
                          stringent student and faculty selection processes, and
                          the unwavering commitment to a well-rounded campus
                          experience have enabled the remarkable success of
                          IITM&quot;s 60,000 strong alumni. Known for their
                          entrepreneurial spirit and innovation, our students
                          represent the modern global citizenry in myriad ways.
                        </p>

                        <div className={styles.academicBox}>
                          <h3 className={styles.academicTitle}>
                            Academic Excellence
                          </h3>
                          <div className={styles.academicGrid}>
                            <div className={styles.academicItem}>
                              <div className={styles.academicDot}></div>
                              <span>MTech Program: 190+ credits</span>
                            </div>
                            <div className={styles.academicItem}>
                              <div className={styles.academicDot}></div>
                              <span>Bachelor&apos;s Program: 430+ credits</span>
                            </div>
                          </div>
                          <p className={styles.academicNote}>
                            Internships and industrial engagements, within the
                            umbrella of academic credit requirements are
                            strongly encouraged.
                          </p>
                        </div>

                        <p className={styles.textRegular}>
                          The professors who participate in teaching and
                          mentoring are remarkably committed academics, with top
                          notch qualifications from across the world. The
                          students themselves are from several countries –
                          India, Zanzibar, and beyond – and are selected based
                          not only on their academic capabilities but also their
                          leadership skills, and an ability to participate
                          meaningfully in the global workforce.
                        </p>

                        <p className={styles.textRegular}>
                          The Data Science and Artificial Intelligence MTech is
                          our flagship program. Starting with intensive training
                          in core subjects during the first semester, students
                          are exposed to advanced topics in the second semester
                          and beyond. Several course projects provide students
                          with a flavour of innovative research, whereas the
                          final two semesters are dedicated to a long thesis
                          project, building up on their base skills and solving
                          real world problems, with novel approaches.
                        </p>

                        <p className={styles.textRegular}>
                          The success of our first batch of graduates has been
                          multi-dimensional. Several of them participated and
                          won awards in hackathons, attended international
                          conferences to present papers, and were hired as
                          interns in technology companies. They have received
                          final placements in companies across the world and
                          were also accepted into highly ranked PhD programs.
                          The diverse environment of IITM Zanzibar also enabled
                          them to develop a deep sense of community.
                        </p>

                        <div className={styles.quote}>
                          <p className={styles.quoteText}>
                            &lsquo;I am confident that our subsequent batches of
                            students will be no less in their achievements. With
                            a strong first year under their belt, and already
                            several successes to their name, the MTech batch of
                            2026, have been nothing short of amazing. I am proud
                            to welcome you to our campus, to interact with our
                            bright students, and explore opportunities
                            together.&rsquo;
                          </p>
                        </div>
                      </div>
                    )}

                    <button
                      className={styles.readMoreButton}
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>Our Team</h2>
          </div>
          <div className={styles.teamGrid}>
            <div className={styles.card}>
              <div className={styles.cardContentTeam}>
                <div className={styles.teamAvatar}>
                  <Img
                    src="/ramkrishna.png"
                    alt="Ramkrishna Pasumarthy"
                    className={styles.teamImage}
                    width={84}
                    height={84}
                  />
                </div>
                <h3 className={styles.teamName}>Ramkrishna Pasumarthy</h3>
                <p className={styles.teamRole}>
                  Program Chair - BS in DS & AI
                  <br />
                  Faculty - School of Engg. & Science
                </p>
                <Link
                  target="_blank"
                  href="https://www.iitmz.ac.in/schools/engineering-and-science/faculty/prof-ramkrishna-pasumarthy"
                >
                  <Button kind="SECONDARY">Know More</Button>
                </Link>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardContentTeam}>
                <div className={styles.teamAvatar}>
                  <Img
                    src="/nirav-1.jpg"
                    alt="Nirav Bhatt"
                    className={styles.teamImage}
                    width={84}
                    height={84}
                  />
                </div>
                <h3 className={styles.teamName}>Nirav Bhatt</h3>
                <p className={styles.teamRole}>
                  Program Chair - MTech in DS & AI
                  <br />
                  Faculty - School of Engg. & Science
                </p>
                <Link
                  target="_blank"
                  href="https://www.iitmz.ac.in/schools/engineering-and-science/faculty/dr-nirav-bhatt"
                >
                  <Button kind="SECONDARY">Know More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Past Recruiters Section */}
        <section>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionIndicator}></div>
            <h2 className={styles.sectionTitle}>Past Recruiters</h2>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <p className={styles.recruitersDescription}>
                {/*Our graduates have been successfully placed in leading
                technology companies worldwide*/}
                Placements & Internships
              </p>
              <div className={styles.recruitersGrid}>
                <div className={styles.recruiterItem}>
                  <div className={`${styles.recruiterLogo} ${styles.logoBlue}`}>
                    <Img
                      src="/recuriter-logo/superdoll.jpg"
                      alt="TechCorp Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>SuperDoll</span>
                </div>

                <div className={styles.recruiterItem}>
                  <div
                    className={`${styles.recruiterLogo} ${styles.logoGreen}`}
                  >
                    <Img
                      src="/recuriter-logo/bosch.jpg"
                      alt="DataSys Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>Bosch</span>
                </div>

                <div className={styles.recruiterItem}>
                  <div
                    className={`${styles.recruiterLogo} ${styles.logoPurple}`}
                  >
                    <Img
                      src="/recuriter-logo/logo.jpg"
                      alt="AI Labs Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>
                    Gyan Data Pvt. Ltd
                  </span>
                </div>

                {/*<div className={styles.recruiterItem}>
                  <div className={`${styles.recruiterLogo} ${styles.logoRed}`}>
                    <Img
                      src="/recuriter-logo/netweb.jpg"
                      alt="SoftTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>Netweb</span>
                </div>*/}

                {/*<div className={styles.recruiterItem}>
                  <div
                    className={`${styles.recruiterLogo} ${styles.logoOrange}`}
                  >
                    <Img
                      src="/recuriter-logo/systech.jpg"
                      alt="InnoTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>SysTech</span>
                </div>*/}

                <div className={styles.recruiterItem}>
                  <div className={`${styles.recruiterLogo} ${styles.logoGray}`}>
                    <Img
                      src="/recuriter-logo/netweb.jpg"
                      alt="GlobalTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>Netweb</span>
                </div>

                <div className={styles.recruiterItem}>
                  <div
                    className={`${styles.recruiterLogo} ${styles.logoOrange}`}
                  >
                    <Img
                      src="/recuriter-logo/systech.jpg"
                      alt="InnoTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>SysTech</span>
                </div>

                <div className={styles.recruiterItem}>
                  <div className={`${styles.recruiterLogo} ${styles.logoGray}`}>
                    <Img
                      src="/recuriter-logo/soft-tech.png"
                      alt="GlobalTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>SoftTech</span>
                </div>
                <div className={styles.recruiterItem}>
                  <div className={`${styles.recruiterLogo} ${styles.logoGray}`}>
                    <Img
                      src="/recuriter-logo/agl.png"
                      alt="GlobalTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>
                    Africa Global Logistics
                  </span>
                </div>
                <div className={styles.recruiterItem}>
                  <div className={`${styles.recruiterLogo} ${styles.logoGray}`}>
                    <Img
                      src="/recuriter-logo/liquid.png"
                      alt="GlobalTech Logo"
                      className={styles.recruiterImage}
                      width={120}
                      height={140}
                    />
                  </div>
                  <span className={styles.recruiterName}>
                    Liquid Intelligent Technologies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
