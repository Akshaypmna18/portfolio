import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/features/theme/ThemeProvider";

// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });
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
    images:
      "https://github.com/Akshaypmna18/portfolio/blob/master/src/app/icon1.png",
    countryName: "India",
    emails: "akshaypmna18@gmail.com",
    phoneNumbers: "+91 9495956795",
  },
  twitter: {
    title: "Akshay K - Personal Portfolio",
    description:
      "Passionate and versatile web developer creating responsive and user-friendly websites. Explore my portfolio to see a showcase of projects and Skills in front-end technologies",
    images:
      "https://github.com/Akshaypmna18/portfolio/blob/master/src/app/icon1.png",
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
  metadataBase: new URL("https://aks-dev.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
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
      <body suppressHydrationWarning className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
