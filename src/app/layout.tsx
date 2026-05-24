import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gammalu Ceylon Foods | Premium Sri Lankan Spices",
  description:
    "Discover the finest organic Ceylon Cinnamon and Black Pepper, sourced directly from the lush plantations of Sri Lanka. Gammalu Ceylon Foods — pure, authentic, exceptional.",
  keywords: [
    "Ceylon spices",
    "Sri Lankan cinnamon",
    "organic spices",
    "premium pepper",
    "Gammalu Ceylon Foods",
    "Ceylon cinnamon export",
  ],
  openGraph: {
    title: "Gammalu Ceylon Foods | Premium Sri Lankan Spices",
    description:
      "Discover the finest organic Ceylon Cinnamon and Black Pepper from Sri Lanka.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
