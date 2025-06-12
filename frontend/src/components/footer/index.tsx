'use client';

import classnames from 'classnames';
import Link from "next/link";
import { Category, Links } from "@/types/footer";

export default function Topik({ categories }: { categories: Category[] }) {
    return (
            <ul className='flex flex-col space-y-2 py-2'>
              {categories.map((link: { href: string, name: string }) => 
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



export function Winnicode({ links }: { links: Links[] }) {
    return (
      <ul className='flex flex-col space-y-2 py-2'>
        {links.map(link => 
        <Link 
          key={link.href} 
          className={classnames({
            'text-blue-100': true,
            'hover:text-blue-300 transition-colors text-sm font-light': true,
          })} 
          href={link.href}>
          {link.name}
        </Link>)}
      </ul>
      )
}