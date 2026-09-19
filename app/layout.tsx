import type { Metadata } from "next";
import { Geist_Mono, Inter, Poppins, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legal Masters | Legal, Compliance & Business Advisory Services",

  description:
    "Legal Masters provides professional legal, compliance and business advisory services, including corporate law, intellectual property, taxation, registrations, finance and more.",

  icons: {
    icon: "/images/legal-masters-logo.svg",
  },

  openGraph: {
    title: "Legal Masters | Legal, Compliance & Business Advisory Services",

    description:
      "Professional legal, compliance and business advisory services covering corporate law, intellectual property, taxation, registrations, finance and more.",

    url: "https://www.thelegalmasters.in",

    siteName: "Legal Masters",

    type: "website",

    images: [
      {
        url: "https://www.thelegalmasters.in/images/legal-masters-logo.svg",
        alt: "Legal Masters",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Legal Masters | Legal, Compliance & Business Advisory Services",

    description:
      "Professional legal, compliance and business advisory services covering corporate law, intellectual property, taxation, registrations, finance and more.",

    images: [
      "https://www.thelegalmasters.in/images/legal-masters-logo.svg",
    ],
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${urbanist.variable} ${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
