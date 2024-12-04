import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { TheHeader } from "@/components/TheHeader";
import { TheFooter } from "@/components/TheFooter";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My NextJs App", //это тоже самое что тег --Head-- где можно в в тайтол прописать заголовок приложенеия
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TheHeader />
        <main className="main">{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
