import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata = {
  title: "Kinxen",
  description: "Kinxen Store - Your One-Stop Shop for Quality Products",
  icons: {
    icon: "/whitelogo.svg",
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
