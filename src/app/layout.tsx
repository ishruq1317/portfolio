import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveCursor from "@/components/InteractiveCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hasin Ishruq | Software Engineer & AI Researcher",
  description:
    "Official portfolio of Hasin Ishruq – Computer Science & Engineering undergraduate at Daffodil International University. Full-stack web architectures (Next.js, NestJS, Spring Boot) and deep learning medical image analysis research.",
  keywords: [
    "Hasin Ishruq",
    "Software Engineer",
    "Full-Stack Developer",
    "Deep Learning Researcher",
    "Medical Image Analysis",
    "Daffodil International University",
    "Next.js",
    "PyTorch",
    "Spring Boot",
    "Portfolio"
  ],
  authors: [{ name: "Hasin Ishruq", url: "https://github.com/ishruq1317" }],
  openGraph: {
    title: "Hasin Ishruq | Software Engineer & AI Researcher",
    description:
      "Full-stack software engineering, scalable distributed web systems, and deep learning medical research by Hasin Ishruq.",
    type: "website",
    url: "https://github.com/ishruq1317",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-violet-500/30 selection:text-white bg-[#09090b] text-zinc-100 min-h-screen flex flex-col overflow-x-hidden`}
      >
        {/* Interactive Cursor Spotlight & Trailing Follower */}
        <InteractiveCursor />

        {/* Common Navigation Bar across all pages */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 flex flex-col items-center w-full z-10">
          {children}
        </main>

        {/* Common Footer across all pages */}
        <Footer />
      </body>
    </html>
  );
}
