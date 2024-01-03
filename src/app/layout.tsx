import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshay K - Personal Portfolio",
  description:
    "Passionate and versatile web developer creating responsive and user-friendly websites. Explore my portfolio to see a showcase of projects and Skills in front-end technologies",
  keywords:
    "Akshay, Akshay K, Akshaypmna, Akshay Portfolio, Akshay K Portfolio, Akshaypmna Portfolio",
  creator: "Akshay K",
  // category: "Portfolio website",
  // publisher:"Akshay K",
  openGraph: {
    title: "Akshay K - Personal Portfolio",
    description:
      "Passionate and versatile web developer creating responsive and user-friendly websites. Explore my portfolio to see a showcase of projects and Skills in front-end technologies",
    type: "website",
    url: "https://aks-dev.vercel.app",
    images: "@/app/favicon.ico",
    countryName: "India",
    emails: "akshaypmna18@gmail.com",
    phoneNumbers: "+91 9495956795",
  },
  twitter: {
    title: "Akshay K - Personal Portfolio",
    description:
      "Passionate and versatile web developer creating responsive and user-friendly websites. Explore my portfolio to see a showcase of projects and Skills in front-end technologies",
    images: "@/app/favicon.ico",
    creator: "Akshay K",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
