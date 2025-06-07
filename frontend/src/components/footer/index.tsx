'use client';

import classnames from 'classnames';
import Link from "next/link";
import CategoryQueryResponse from "@/types/category";

const winnicode = [
  { label: 'Tentang Kami', href: '/about' },
]

export default function Topik({ categories }: { categories: CategoryQueryResponse }) {
    return (
            <ul className='flex flex-col space-y-2 py-2'>
              {categories.data.map((link: { href: string, name: string }) => 
                <Link 
                  key={link.href} 
                  className={classnames({
                    'text-blue-100': true,
                    'hover:text-blue-300 transition-colors text-sm font-light': true,
                  })} 
                  href={'/' + link.href }>
                  {link.name}
                </Link>)}
            </ul>
      )
}



export function Winnicode() {
    return (
      <ul className='flex flex-col space-y-2 py-2'>
        {winnicode.map(link => 
        <Link 
          key={link.href} 
          className={classnames({
            'text-blue-100': true,
            'hover:text-blue-300 transition-colors text-sm font-light': true,
          })} 
          href={link.href}>
          {link.label}
        </Link>)}
      </ul>
      )
}