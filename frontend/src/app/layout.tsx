import './theme-config.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portal Berita",
  description: "Winnicode Garuda Teknologi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
          <nav className='h-14 w-full bg-blue-500 content-center sticky top-0'>
            <Navbar/>
          </nav>
          <main className='p-5 min-h-screen bg-white text-black'>{children}</main>
          <Footer/>
      </body>
    </html>
  );
}
