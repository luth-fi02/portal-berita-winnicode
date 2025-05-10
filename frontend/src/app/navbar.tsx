'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import Image from 'next/image';
import classnames from 'classnames';
import logo from '../../public/image/logo.png'
import { TextField } from '@radix-ui/themes';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { SlMenu } from "react-icons/sl";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Beranda', href: '/' },
    { label: 'Politik', href: '/politik' },
    { label: 'Pendidikan', href: '/pendidikan' },
    { label: 'Teknologi', href: '/teknologi' },
  ]
  return (
    <nav className='flex space-x-5 h-14 px-5 items-center justify-center bg-blue-500'>
        <div className='flex-1/3 mx-2 text-white text-2xl'>
          <Link href="/more">
            <SlMenu/>
          </Link>
        </div>
        <ul className='mx-10 space-x-6 flex-1/3'>
          {links.map(link => 
          <Link 
            key={link.href} 
            className={classnames({
              'text-white border-b-2 border-solid': link.href === currentPath,
              'text-blue-100': link.href !== currentPath,
              'hover:text-blue-300 transition-colors': true,
            })} 
            href={link.href}>
            {link.label}
          </Link>)}
        </ul>
        <TextField.Root placeholder="Search article...." className='flex-1/3 mx-2 max-w-100'>
	        <TextField.Slot>
		        <FaMagnifyingGlass height="16" width="16" />
	        </TextField.Slot>
        </TextField.Root>
    </nav>
  )
}

export default Navbar