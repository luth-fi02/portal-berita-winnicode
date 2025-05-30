'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import classnames from 'classnames';
import logo from '../../public/image/logo.png'

export default function Footer() {
  const currentPath = usePathname();

  const winnicode = [
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Karir', href: '/karir' },
  ]

  const topik = [
    { label: 'Indonesia', href: '/indonesia' },
    { label: 'Internasional', href: '/internasional' },
    { label: 'Politik', href: '/politik' },
    { label: 'Pendidikan', href: '/pendidikan' },
    { label: 'Kesehatan', href: '/kesehatan' },
    { label: 'Olahraga', href: '/olahraga' },
    { label: 'Otomotif', href: '/otomotif' },
    { label: 'Hiburan', href: '/hiburan' },
  ]

  return (
    <nav className='flex flex-col p-5 bg-blue-500'>
        <div className='flex-1/3 mx-2'>
          <Image
            src= {logo}
            height={40}
            width={40}
            alt='logo'
          />
        </div>
        <div>
          <div className='flex py-5 px-2 space-x-24 text-blue-50'>
            <div>
              <h1>Winnicode Garuda Teknologi</h1>
              <ul className='flex flex-col space-y-2 py-2'>
                {winnicode.map(link => 
                <Link 
                  key={link.href} 
                  className={classnames({
                    'text-white': link.href === currentPath,
                    'text-blue-100': link.href !== currentPath,
                    'hover:text-blue-300 transition-colors text-sm font-light': true,
                  })} 
                  href={link.href}>
                  {link.label}
                </Link>)}
              </ul>
            </div>
            <div>
              <h1>Topik</h1>
              <ul className='flex flex-col space-y-2 py-2'>
                {topik.map(link => 
                <Link 
                  key={link.href} 
                  className={classnames({
                    'text-white': link.href === currentPath,
                    'text-blue-100': link.href !== currentPath,
                    'hover:text-blue-300 transition-colors text-sm font-light': true,
                  })} 
                  href={link.href}>
                  {link.label}
                </Link>)}
              </ul>
            </div>
            <div className='max-w-1/6'>
              <h1>Kontak Kami</h1>
              <ul className='flex flex-col space-y-2 py-2 text-blue-100 text-sm font-light shrink'>
                <li>winnicodegarudaofficial@gmail.com</li>
                <li><span className='font-medium'>Alamat (Pusat):</span> Bandung - Jl. Asia Afrika No.158, Kb. Pisang, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40261</li>
                <li><span className='font-medium'>Alamat (Cabang):</span> Bantul,Yogyakarta</li>
                <li>Call Center: 6285159932501 (24 Jam)</li>
              </ul>
            </div>
            <div>
              <h1>Ikuti Kami</h1>
            </div>
          </div>
        </div>
    </nav>
  )
}