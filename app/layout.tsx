import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.name} | ${site.doctor.name}, ${site.doctor.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  alternates: { canonical: "/" },
  keywords: [
    "pulmonologist",
    "lung clinic",
    "asthma treatment",
    "allergy clinic",
    "COPD",
    "sleep apnea",
    "PFT test",
    "Dr Sreelakshmi pulmonologist",
    "Reventil",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description: site.description,
    locale: "en_IN",
  },
  twitter: { card: "summary", title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#1463e0",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  url: site.url,
  description: site.description,
  medicalSpecialty: "Pulmonary",
  sameAs: [site.youtube],
  employee: {
    "@type": "Physician",
    name: site.doctor.name,
    jobTitle: site.doctor.title,
    medicalSpecialty: "Pulmonary",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {site.gtmId && (
          <>
            <Script id="gtm-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});`}
            </Script>
            <Script
              src={`https://www.googletagmanager.com/gtm.js?id=${site.gtmId}`}
              strategy="afterInteractive"
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
