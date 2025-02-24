import styles from "./admissions-enquiry.module.scss";
import { IoMailOutline, IoLogoWhatsapp } from "react-icons/io5";
import Button from "@/components/button";
import Link from "next/link";

interface InquirySectionProps {
  title: string;
  description: string;
  emails?: string[];
  whatsapp?: string;
  inquiryMessage?: string;
  inquiryLink?: string;
}

export default function InquirySection({ 
  title, 
  description, 
  emails = [], 
  whatsapp, 
  inquiryMessage, 
  inquiryLink 
}: InquirySectionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <h2>{title}</h2>
            <p>{description}</p>

            <div className={styles.contacts}>
              {whatsapp && (
                <a href={`https://wa.me/${whatsapp}`} className={styles.contact}>
                  <IoLogoWhatsapp />
                  <span>{whatsapp}</span>
                </a>
              )}
              {emails.map((email, index) => (
                <a key={index} href={`mailto:${email}`} className={styles.contact}>
                  <IoMailOutline />
                  <span>{email}</span>
                </a>
              ))}
            </div>

            {inquiryMessage && (
              <div className={styles.cta}>
                <p>{inquiryMessage}</p>
                {inquiryLink && (
                  <Link target="_blank" href={inquiryLink}>
                    <Button kind="PRIMARY">Enquire Now</Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
