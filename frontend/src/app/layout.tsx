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
          <main className='bg-white text-black'>
            <nav className='h-14 bg-blue-500 w-full content-center fixed top-0'>
              <Navbar/>
            </nav>
            <div  className='min-h-screen p-5 my-9 w-full'>
                  {children}
            </div>
            <Footer/>
          </main>
      </body>
    </html>
  );
}
