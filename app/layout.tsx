import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samid3v - Software Engineer | Web Developer | Automation & AI Solutions",
  description: "Innovative Software Engineer with a strong background in web development, backend systems, and cloud-based automation. Skilled in designing and deploying full-stack applications, integrating AI-driven tools, and optimizing business workflows through technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1a1a2e] text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
