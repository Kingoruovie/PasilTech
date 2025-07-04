import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pasil Tech Limited",
  description: "Your IT Virtual Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${interSans.variable}  antialiased font-sans relative text-neutral-700 bg-gray-100`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
