// Import Font Awesome icons
import { FaCalendarAlt, FaAward, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./research.module.scss";
// Assuming research.ts exports typed data as shown in previous examples
import { researchData, FacultyMember, Publication, AwardEntry } from "@/data/research"; // Adjust path if needed

function getPublicationTypeBadgeClassName(type: string): string {
  switch (type) {
    case "Journal":
      return styles.typeJournal;
    case "Conference":
      return styles.typeConference;
    case "Invited Talk":
      return styles.typeInvitedTalk;
    default:
      return styles.typeDefault;
  }
}

export default function ResearchHighlights() {
  return (
      <section className={styles.section}>
      {/* <div className={styles.header}>
        <h1 className={styles.title}>Research Highlights</h1>
        <p className={styles.subtitle}>2024-2025</p>
      </div> */}

<div className={styles.grid}>
        {researchData.faculty.map((faculty: FacultyMember, facultyIndex: number) => (
          <article key={facultyIndex} className={styles.card}>
            <header className={`${styles.cardHeader} ${styles.facultyHeaderBg}`}>
              <div className={styles.cardTitleContainer}>
                <FaUsers className={styles.titleIcon} />
                <h2 className={styles.cardTitle}>{faculty.name}</h2>
              </div>
              {/* <p className={styles.cardDescription}>
                {faculty.publications.length} publication{faculty.publications.length !== 1 ? "s" : ""}
              </p> */}
            </header>
            <div className={styles.cardContent}>
              <div className={styles.facultyContentLayout}>
                {/* Conditionally render faculty poster */}
                {faculty.posterImage && (
                  <div className={styles.facultyPoster}>
                    <img
                      src={faculty.posterImage} // No need for || "/placeholder.svg" if it's truly optional and means "don't show"
                      alt={`Research poster for ${faculty.name}`}
                      className={styles.posterImage}
                    />
                    {/* <div className={styles.posterBadgeContainer}>
                      <span className={styles.badgePoster}>
                        Research Poster
                      </span>
                    </div> */}
                  </div>
                )}

                <div className={styles.publications}> {/* This will expand if poster is not present */}
                  {faculty.publications.map((pub: Publication, pubIndex: number) => (
                    <section key={pubIndex} className={styles.publicationEntry}>
                      <div className={styles.publicationMeta}>
                        <div className={styles.publicationInfo}>
                          <div className={styles.publicationBadges}>
                            <span className={getPublicationTypeBadgeClassName(pub.type)}>
                              {pub.type}
                            </span>
                            <span className={`${styles.badgeOutline} ${styles.badgeWithIcon}`}>
                              <FaCalendarAlt className={styles.iconXs} />
                              {pub.year}
                            </span>
                          </div>
                          <h3 className={styles.publicationTitleText}>{pub.title}</h3>
                          <div className={styles.publicationVenueInfo}>
                            <FaMapMarkerAlt className={styles.iconSm} />
                            <span>{pub.venue}</span>
                          </div>
                          <p className={styles.publicationDescriptionText}>{pub.description}</p>
                        </div>
                      </div>
                      {pubIndex < faculty.publications.length - 1 && (
                        <hr className={`${styles.customSeparator} ${styles.separatorMediumMargin}`} />
                      )}
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
              <div className={styles.header}>
              <h1>Awards & Recognitions</h1>
              </div>

        <article className={styles.card}> {/* Awards Card */}
          {/* <header className={`${styles.cardHeader} ${styles.awardHeaderBg}`}>
            <div className={styles.cardTitleContainer}>
              <FaAward className={styles.titleIcon} />
              <h2 className={styles.cardTitle}>Awards & Recognitions</h2>
            </div>
            <p className={styles.cardDescription}>Student achievements and recognitions</p>
          </header> */}
          <div className={styles.cardContent}>
            <div className={styles.awards}>
              {researchData.awards.map((award: AwardEntry, awardIndex: number) => (
                <section key={awardIndex} className={styles.awardEntry}>
                  <div className={styles.awardLayout}>
                    {/* Conditionally render award poster */}
                    {award.posterImage && (
                      <div className={styles.awardPoster}>
                        <img
                          src={award.posterImage} // No need for || "/placeholder.svg"
                          alt={`Award poster for ${award.student}`}
                          className={styles.posterImage}
                        />
                        {/* <div className={styles.posterBadgeContainer}>
                          <span className={styles.badgePoster}>
                            Award Poster
                          </span>
                        </div> */}
                      </div>
                    )}

                    <div className={styles.awardDetails}> {/* This will expand if poster is not present */}
                      <span className={`${styles.badgeSecondary} ${styles.badgeWithIcon}`}>
                        <FaUsers className={styles.iconXs} />
                        Faculty Mentor: {award.mentor}
                      </span>
                      <h3 className={styles.awardTitleText}>{award.award}</h3>
                      <div className={styles.awardInfoGroup}>
                        <p className={styles.infoLineFlex}>
                          <span className={styles.infoLabel}>Student(s):</span>
                          <span className={styles.infoValue}>{award.student}</span>
                        </p>
                        <p className={styles.infoLineBlock}>
                          <span className={styles.infoLabel}>Work:</span>
                          <span className={`${styles.infoValue} ${styles.infoValueItalic}`}>{award.work}</span>
                        </p>
                        <div className={styles.conferenceInfo}>
                          <FaMapMarkerAlt className={styles.conferenceIcon} />
                          <span>{award.conference}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {awardIndex < researchData.awards.length - 1 && (
                     <hr className={`${styles.customSeparator} ${styles.separatorLargeMargin}`} />
                  )}
                </section>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}