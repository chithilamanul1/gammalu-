import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gammalu Ceylon Foods | Premium Sri Lankan Spices",
  description:
    "Discover the finest organic Ceylon Cinnamon and Black Pepper, sourced directly from the lush plantations of Sri Lanka. Gammalu Ceylon Foods — pure, authentic, exceptional.",
  keywords: [
    "ceylon spices",
    "ceylon pepper",
    "ceylon cinamon",
    "cinnamon sri lanka",
    "ceylon cinnamon from sri lanka",
    "ceylon alba cinnamon powder",
    "best ceylon cinnamon from sri lanka",
    "alba cinnamon price in sri lanka",
    "best cinnamon in sri lanka",
    "best sri lankan cinnamon",
    "c5 cinnamon price in sri lanka",
    "cassia ceylon",
    "ceylon alba cinnamon",
    "ceylon and cassia",
    "ceylon and cassia cinnamon",
    "ceylon black pepper",
    "ceylon cardamom",
    "ceylon cassia cinnamon",
    "ceylon cinnamon powder sri lanka",
    "ceylon cinnamon price in sri lanka",
    "ceylon clove",
    "ceylon eco spices",
    "ceylon ginger",
    "ceylon nutmeg",
    "ceylon organic spices",
    "ceylon peppercorns",
    "ceylon rolled cinnamon",
    "ceylon spice exports",
    "ceylon spices company",
    "ceylon spices list",
    "ceylon turmeric",
    "ceylon turmeric powder",
    "cinamon sri lanka",
    "cinnamon 100g price in sri lanka",
    "cinnamon c4 price in sri lanka",
    "cinnamon for sale in sri lanka",
    "cinnamon growing in sri lanka",
    "cinnamon leaf ceylon",
    "cinnamon of sri lanka",
    "cinnamon plant price in sri lanka",
    "cinnamon plants for sale in sri lanka",
    "cinnamon powder in sri lanka",
    "cinnamon powder price in sri lanka",
    "cinnamon powder sri lanka",
    "cinnamon price in sri lanka",
    "cinnamon price in sri lanka 2021",
    "cinnamon price per kg in sri lanka",
    "cinnamon sellers sri lanka",
    "cinnamon spice sri lanka",
    "cinnamon stick price in sri lanka",
    "cinnamon stick sri lanka",
    "cino ceylon",
    "dalchini sri lanka",
    "organic ceylon cinnamon powder from sri lanka",
    "organic ceylon cinnamon sri lanka",
    "organic cinnamon sri lanka",
    "pure ceylon items",
    "spice of ceylon",
    "srilankan rolled cinnamon",
    "true ceylon",
    "types of cinnamon in sri lanka",
    "gammalu ceylon foods"
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
