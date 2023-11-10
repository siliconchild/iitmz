import AdmissionHeader from "@/components/admission-header";
import Steps from "@/components/steps";
import AdmissionsDownloadable from "@/components/admissions-downloadable";
import Fees from "@/components/fees";
import Eligilibity from "@/components/eligibility";

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
      <Steps />
      <AdmissionsDownloadable />
      <Fees />
      <div className="container">
        <Eligilibity type="FULL" />
      </div>
    </>
  );
}
