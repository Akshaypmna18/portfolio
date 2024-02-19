import { Inter } from "next/font/google";
import "./globals.css";
import meta from "@/lib/metadata";

// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });
const inter = Inter({ subsets: ["latin"] });

export const metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.className} scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
