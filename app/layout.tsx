import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: "swap"
})

export const metadata: Metadata = {
  title: "My Portfolio | Design & Development",
  description:
    "Design & development across product and brand. Selected projects, skills, and about.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${hankenGrotesk.className} h-full`}>{children}</body>
    </html>
  );
}
