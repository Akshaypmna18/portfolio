import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshay K - Personal Portfolio",
  description:
    "Passionate and versatile web developer creating responsive and user-friendly websites. Explore my portfolio to see a showcase of projects and Skills in front-end technologies",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon1.png",
    apple: "/apple-icon.png",
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
  keywords: [
    "Akshay",
    "Akshay K",
    "Akshaypmna",
    "Akshay Portfolio",
    "Akshay K Portfolio",
    "Akshaypmna Portfolio",
    "Akshay Perinthalmanna",
  ],
  creator: "Akshay K",
  authors: [{ name: "Akshay K" }],
  applicationName: "Akshay K - Personal Portfolio",
  category: "Portfolio website",
  publisher: "Akshay K",
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["akshaypmnacoc@gmail.com", "https://aks-dev.vercel.app"],
    },
  },
  openGraph: {
    title: "Akshay K - Personal Portfolio",
    description:
      "Passionate and versatile web developer creating responsive and user-friendly websites. Explore my portfolio to see a showcase of projects and Skills in front-end technologies",
    type: "website",
    url: "https://aks-dev.vercel.app",
    siteName: "Akshay K - Personal Portfolio",
    images: [
      {
        url: "https://github.com/Akshaypmna18/portfolio/blob/master/src/app/icon1.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://github.com/Akshaypmna18/portfolio/blob/master/src/app/icon4.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    countryName: "India",
    emails: "akshaypmna18@gmail.com",
    phoneNumbers: "+91 9495956795",
  },
  twitter: {
    title: "Akshay K - Personal Portfolio",
    description:
      "Passionate and versatile web developer creating responsive and user-friendly websites. Explore my portfolio to see a showcase of projects and Skills in front-end technologies",
    images: [
      {
        url: "https://github.com/Akshaypmna18/portfolio/blob/master/src/app/icon1.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://github.com/Akshaypmna18/portfolio/blob/master/src/app/icon4.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    creator: "@akshaypmna18",
  },
  appleWebApp: {
    statusBarStyle: "black-translucent",
    title: "Akshay K - Personal Portfolio",
  },
  appLinks: {
    web: {
      url: "https://aks-dev.vercel.app",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={false} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
