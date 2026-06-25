import type { Metadata } from "next";
import { Hanken_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flight Club | Strategic Pitch",
  description: "A single-page scrollytelling presentation for Flight Club.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
