'use client';

import classnames from 'classnames';
import Link from "next/link";
import CategoryQueryResponse from "@/types/category";

export default function Topik({ categories }: { categories: CategoryQueryResponse }) {
    console.dir(categories, {depth: null})
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