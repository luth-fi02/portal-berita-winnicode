'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import classnames from 'classnames';
import logo from '../../public/image/logo.png'
import { TextField } from '@radix-ui/themes';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Footer = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Beranda', href: '/' },
    { label: 'Politik', href: '/politik' },
    { label: 'Pendidikan', href: '/pendidikan' },
    { label: 'Teknologi', href: '/teknologi' },
    { label: 'More', href: '/more' },
  ]
  return (
    <nav className='flex space-x-5 h-dvh p-5 justify-center bg-blue-500'>
        <Link href="/" className='flex-1/3 mx-2'>
          <Image
            src= {logo}
            height={40}
            width={40}
            alt='logo'
          />
        </Link>
    </nav>
  )
}

export default Footer