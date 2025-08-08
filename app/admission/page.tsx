import AdmissionHeader from "@/components/admission-header";
import Steps from "@/components/steps";
import AcademicPrograms from "@/components/admission-courses";
import AdmissionTimeline from "@/components/admission-timeline";
import InquirySection from "@/components/admissions-enquiry";
import ApplyCard from "@/components/apply-cta";
import styles from "./page.module.scss";

export const metadata = {
  title: "Why Study With Us? | How To Apply?",
  description:
    "Learn More About The Academic Programs, How To Apply, Tuition Fees, Accommodation Fees & Eligibility Criteria At IIT Madras Zanzibar.",
  alternates: {
    canonical: `admission`,
  },
};

export default function AdmissionPage() {
  return (
    <div className={styles.page}>
      <AdmissionHeader />
      <AdmissionTimeline />
      <AcademicPrograms />
      <Steps />
      <div className="container">
        <ApplyCard
          title="Ready to Begin Your Journey?"
          description="Take the first step towards your future at IIT Madras Zanzibar. Applications are now open for the upcoming academic year."
          // buttonLink="https://admissions.iitmz.ac.in/"
          buttonLink="https://admissions.iitmz.ac.in/bscpe"
          buttonText="Apply Now"
        />
      </div>
      <InquirySection
        title="Have Questions?"
        description="Are you interested in applying to IIT Madras Zanzibar and still have questions about the program, admission process, and screening test? Our admission counsellors are here to help."
        emails={["admissions@iitmz.ac.in"]}
        inquiryMessage="Fill out the IITM Zanzibar Inquiry Form and our admission counsellor will be in touch with you."
        inquiryLink="https://ge.iitm.ac.in/forms/iitmz-enquiry-form"
      />
    </div>
  );
}
