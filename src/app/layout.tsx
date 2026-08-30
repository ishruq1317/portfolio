import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hasin Ishruq | Full-Stack Developer",
  description: "Professional portfolio of Hasin Ishruq, showcasing modern full-stack development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-500/30 selection:text-white`}>
        <Navbar />
        <main className="min-h-screen pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
