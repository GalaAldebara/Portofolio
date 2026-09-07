import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Iqbal Makmur Al-Muniri — Full-Stack Web Developer",
  description: "Portfolio of Muhammad Iqbal Makmur Al-Muniri, a D4 Teknik Informatika graduate of Politeknik Negeri Malang, showcasing Laravel projects, hospital internship work, and hobbies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
