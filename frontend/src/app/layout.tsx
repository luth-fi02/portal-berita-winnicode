import '@radix-ui/themes/styles.css'
import './theme-config.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from '@radix-ui/themes'
import "./globals.css";
import Navbar from '../components/navbar/navbar';
import Footer from './footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
