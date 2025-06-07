import '@radix-ui/themes/styles.css'
import './theme-config.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from '@radix-ui/themes'
import "./globals.css";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portal Berita - Winnicode Garuda Teknologi",
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
        <Theme appearance='light'>
          <Navbar/>
          <main className='p-5 min-h-screen'>{children}</main>
          <Footer/>
        </Theme>
      </body>
    </html>
  );
}
