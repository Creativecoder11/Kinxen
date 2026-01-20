import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = {
  title: "Kinxen",
  description: "KinXen is a modern e-commerce brand creating quality-focused products designed for everyday living.",
  icons: {
    icon: "/whitelogo.svg",
  },
  openGraph: {
    title: "Kinxen",
    description: "KinXen is a modern e-commerce brand creating quality-focused products designed for everyday living.",
    url: "https://www.kixen.com",
    siteName: "kinxen",
    images: [
      {
        url: "/voiletlogo.png",
        width: 1200,
        height: 630,
        alt: "kinxen ecommerce store",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
