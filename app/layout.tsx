import "@/styles/globals.css";
import { Viewport } from "next";
import { Lato, Raleway } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AdmissionWidget from "@/components/admission-widget";
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


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="5JWgn4gCT2PCaGMgbVSrlk_1EWzg5HkMu7Li-NsQO_Q" />
      <GoogleTagManager gtmId="GTM-N9TVCHGQ" />
      <body className={`${lato.className}${raleway.className}`}>
        <Header />
        {children}
        <Footer />
        <AdmissionWidget />
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
