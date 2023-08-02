import "@/styles/globals.css";
import { Suspense } from "react";
import { Lato, Raleway } from "next/font/google";
import Header from "@/components/header";
// import Footer from "@/components/footer";
import AdmissionWidget from "@/components/admission-widget";
import Analytics from "@/components/analytics";

const lato = Lato({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return {
    metadataBase: new URL("https://zanzibar.iitm.ac.in"),
    title: "IIT Madras Zanzibar Campus",
    description: "IIT Madras Zanzibar Campus",
    applicationName: "IITM Zanzibar",
    themeColor: "#d50032",
    alternates: {
      canonical: slug,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="5JWgn4gCT2PCaGMgbVSrlk_1EWzg5HkMu7Li-NsQO_Q"
      />
      <body className={`${lato.className}${raleway.className}`}>
        <Header />
        {children}
        {/* <Footer /> */}
        <AdmissionWidget />
        <Suspense>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
