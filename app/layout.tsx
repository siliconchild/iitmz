import "@/styles/globals.css";
import { Viewport } from "next";
import { Suspense } from "react";
import { Lato, Raleway } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AdmissionWidget from "@/components/admission-widget";
import { getAllAnnouncements } from "@/data/announcements";
import { unstable_cache as cache } from "next/cache";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

const lato = Lato({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#996c254d",
};

export const metadata = {
  metadataBase: new URL("https://zanzibar.iitm.ac.in"),
  title: {
    default: "IIT Madras Zanzibar Campus | Empower Your Future with IIT",
    template: `%s | IIT Madras Zanzibar`,
  },
  description: "Discover the Latest from IIT Madras Zanzibar Campus. Exciting Programs and Global Opportunities Await. Learn More!",
  applicationName: "IITM Zanzibar",
};

const getAllAnnouncementsCached = cache(getAllAnnouncements, ["z-announcements"], {
  tags: ["ticker"],
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const announcements = await getAllAnnouncementsCached();
  return (
    <html lang="en">
      <meta name="google-site-verification" content="5JWgn4gCT2PCaGMgbVSrlk_1EWzg5HkMu7Li-NsQO_Q" />
      <GoogleTagManager gtmId="GTM-N9TVCHGQ" />
      <body className={`${lato.className}${raleway.className}`}>
        <Header announcements={announcements} />
        {children}
        <Footer />
        <AdmissionWidget />
        <div className="npf_chatbots" data-w="6ccf7b4ad1fa4cc6b210b201e6fa77b8" style={{ display: "none" }}></div>
        <Script src="/api/chatbot-script" strategy="afterInteractive" />
        <Script id="nopaperforms-config" strategy="beforeInteractive">
          {`
            var npf_d='https://admissions.iitmz.ac.in';
            var npf_c='6293';
            var npf_m='1';
          `}
        </Script>
        <Script
          src="https://track.nopaperforms.com/js/track.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
