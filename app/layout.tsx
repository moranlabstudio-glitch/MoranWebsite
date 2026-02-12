import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const noto = Noto_Sans_TC({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-noto", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: `${site.name}｜${site.description}`,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${site.name}｜${site.description}`,
    description: site.description,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body className={`${inter.variable} ${noto.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
