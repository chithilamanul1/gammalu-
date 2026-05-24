import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gammalu Ceylon Foods | Premium Sri Lankan Spices",
  description:
    "Discover the finest organic spices from the heart of Ceylon. Gammalu Ceylon Foods (Pvt) Ltd exports premium cinnamon, pepper, turmeric, and exotic spice blends to the world.",
  keywords: [
    "Ceylon spices",
    "Sri Lankan cinnamon",
    "organic spices",
    "premium pepper",
    "turmeric export",
    "Gammalu Ceylon Foods",
  ],
  openGraph: {
    title: "Gammalu Ceylon Foods | Premium Sri Lankan Spices",
    description:
      "Discover the finest organic spices from the heart of Ceylon.",
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
      <body className="grain-overlay">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
