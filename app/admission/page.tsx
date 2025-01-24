import AdmissionHeader from "@/components/admission-header";
import Steps from "@/components/steps";
import AcademicPrograms from "@/components/admission-courses";
import AdmissionTimeline from "@/components/admission-timeline";
import InquirySection from "@/components/admissions-enquiry";

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
    <>
      <AdmissionHeader />
      <AdmissionTimeline />
      <AcademicPrograms />
      <Steps />
      <InquirySection />
    </>
  );
}
